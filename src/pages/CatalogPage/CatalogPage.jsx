import SearchBar from "../../components/SearchBar/SearchBar";
import CardList from "../../components/CardList/CardList";

export default function CatalogPage() {
  return (
    <div className="">
      <div className="styledContainer flex flex-col justify-center items-center">
        <SearchBar />
        <CardList />
      </div>
    </div>
  );
}
