import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import CardList from "../../components/CardList/CardList";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";
import fetchAdverts from "../../api/fetchAdverts";

export default function CatalogPage() {
  const [cards, setCards] = useState(null);
  const [page, setPage] = useState(1);
  const [visibleLoadMoreBtn, setVisibleLoadMoreBtn] = useState(true);
  console.log(cards);

  useEffect(() => {
    const fetching = async () => {
      const res = await fetchAdverts(page);
      if (res.length < 8) {
        setVisibleLoadMoreBtn(false);
      }
      if (page !== 1) {
        setCards((prev) => [...prev, ...res]);
      } else {
        setCards(res);
      }
    };
    fetching();
  }, [page]);

  return (
    <div className="">
      <div className="styledContainer flex flex-col justify-center items-center">
        <SearchBar />
        {cards && <CardList cards={cards} />}
        {visibleLoadMoreBtn && cards && (
          <LoadMoreBtn onClick={() => setPage((prev) => prev + 1)} />
        )}
      </div>
    </div>
  );
}
