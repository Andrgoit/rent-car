import { Link } from "react-router-dom";
import img from "../../assets/image/404.svg";
import bg from "../../assets/image/bg.jpg";

export default function NotFoundPage() {
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
      <div className=" text-white pt-32 styledContainer flex flex-col items-center">
        <span className=" font-medium text-5xl">Whoops!</span>
        <span className=" mt-6">Sorry, this page is not available.</span>
        <div className=" py-10">
          <img src={img} alt="not found page" />
        </div>
        <Link
          to="/"
          className=" font-Manrope text-sm font-semibold text-white px-6 py-3 bg-blue_primary hover:bg-blue_secondary rounded-xl"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
