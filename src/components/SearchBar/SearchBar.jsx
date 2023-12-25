import BrandSelector from "./BrandSelector/BrandSelector";
import PriceSelector from "./PriceSelector/PriceSelector";
import MileageSelector from "./MileageSelector/MileageSelector";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setFilter, resetFilter } from "../../redux/filter/filterSlice";
import { selectFilter } from "../../redux/filter/filterSelectors";

export default function SearchBar() {
  const [brand, setBrand] = useState(null);
  const [price, setPrice] = useState(null);
  const [mileageFrom, setMileageFrom] = useState(null);
  const [mileageTo, setMileageTo] = useState(null);
  const dispatch = useDispatch();
  const filters = useSelector(selectFilter);

  const resetForm = () => {
    setBrand(null);
    setPrice(null);
    setMileageFrom(null);
    setMileageTo(null);
  };

  const handlerSubmit = () => {
    console.log({ brand, price, mileageFrom, mileageTo });
    dispatch(setFilter({ brand, price, mileageFrom, mileageTo }));
  };

  useEffect(() => {
    dispatch(resetFilter());
  }, [dispatch]);

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
        onClick={handlerSubmit}
        className=" py-3 px-11 text-white bg-blue_primary hover:bg-blue_secondary rounded-xl"
      >
        Search
      </button>
      <button
        disabled={!filters}
        onClick={() => dispatch(resetFilter())}
        className="py-3 px-11 text-white rounded-xl bg-red-500 hover:bg-red-800
          disabled:bg-stone-400 disabled:cursor-not-allowed"
      >
        Reset
      </button>
    </div>
  );
}
