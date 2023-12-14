import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import CardList from "../../components/CardList/CardList";
import fetchAdverts from "../../api/fetchAdverts";

export default function CatalogPage() {
  const [cards, setCards] = useState(null);
  console.log(cards);

  useEffect(() => {
    const fetching = async () => {
      const res = await fetchAdverts(1);
      setCards(res);
    };
    fetching();
  }, []);

  return (
    <div className="">
      <div className="styledContainer flex flex-col justify-center items-center">
        <SearchBar />
        {cards && <CardList cards={cards} />}
      </div>
    </div>
  );
}
