import BrandSelector from "./BrandSelector/BrandSelector";
import PriceSelector from "./PriceSelector/PriceSelector";
import MileageSelector from "./MileageSelector/MileageSelector";
import { useState } from "react";

export default function SearchBar() {
  const [brand, setBrand] = useState(null);
  const [price, setPrice] = useState(null);
  const [mileageFrom, setMileageFrom] = useState(null);
  const [mileageTo, setMileageTo] = useState(null);

  const handelSubmit = () => {
    console.log("brand", brand);
    console.log("price", price);
    console.log("mileageFrom", mileageFrom);
    console.log("mileageTo", mileageTo);
  };

  const changeMileage = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "mileageFrom":
        setMileageFrom(value);
        break;
      case "mileageTo":
        setMileageTo(value);
        break;
      default:
        break;
    }
  };
  return (
    <div className="pt-[150px] flex flex-wrap justify-center items-end gap-5">
      <BrandSelector setBrand={setBrand} />
      <PriceSelector setPrice={setPrice} />
      <MileageSelector onChange={changeMileage} />
      <button
        onClick={handelSubmit}
        className=" py-3 px-11 text-white bg-blue_primary hover:bg-blue_secondary rounded-xl"
      >
        Search
      </button>
    </div>
  );
}
