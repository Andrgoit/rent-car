import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <>
      <Link to="/" className="flex gap-3 items-center h-full">
        <span className=" py-5 sm:text-4xl text-white">RentalCar</span>
      </Link>
    </>
  );
}
