import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.png";

export default function Logo() {
  return (
    <>
      <Link to="/" className="flex gap-3 items-center h-full">
        <img src={logo} alt="logo" className=" block w-11 sm:w-28 h-auto" />
        <span className=" sm:text-4xl text-white">RentalCar</span>
      </Link>
    </>
  );
}
