import CardList from "../../components/CardList/CardList";

import { useSelector } from "react-redux";
import { selectFavorite } from "../../redux/favorite/favoriteSelectors";

import bg from "../../assets/image/bg.jpg";

export default function FavoritesPage() {
  const favorites = useSelector(selectFavorite);
  return (
    <div
      className=" min-h-screen"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="pt-32 text-white styledContainer flex flex-col justify-center items-center">
        {favorites.length > 0 ? (
          <CardList cards={favorites} />
        ) : (
          <p>Sorry, but nothing has been selected to favorite</p>
        )}
      </div>
    </div>
  );
}
