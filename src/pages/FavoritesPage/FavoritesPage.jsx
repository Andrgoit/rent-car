import bg from "../../assets/image/bg.jpg";

export default function FavoritesPage() {
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
        FavoritesPage
      </div>
    </div>
  );
}
