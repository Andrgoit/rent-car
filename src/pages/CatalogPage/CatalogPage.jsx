import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import CardList from "../../components/CardList/CardList";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";

import { useSelector, useDispatch } from "react-redux";
import {
  selectCars,
  selectLoading,
  selectIsShowLoadBtn,
  selectPage,
  selectError,
} from "../../redux/cars/carsSelectors";

import { selectFilter } from "../../redux/filter/filterSelectors";

import { fetchCars } from "../../redux/cars/carsOperations";
import { clearCarList, nextPage, resetPage } from "../../redux/cars/carsSlice";
import { clearOrder } from "../../redux/order/orderSlice";

import bg from "../../assets/image/bg.jpg";

export default function CatalogPage() {
  const [filCars, setFilCars] = useState([]);
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectLoading);
  const isShowLoadBtn = useSelector(selectIsShowLoadBtn);
  const page = useSelector(selectPage);
  const isError = useSelector(selectError);
  const filters = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearOrder());
    dispatch(resetPage());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCars(page));
  }, [dispatch, page]);

  const filteredCars = (filters) => {
    const { brand, price, mileageFrom, mileageTo } = filters;
    console.log("filters", filters);

    if (brand) {
      setFilCars(
        (prev) =>
          (prev = cars.filter(
            (card) => card.make.toLowerCase() === brand.value.toLowerCase()
          ))
      );
    } else {
      setFilCars(cars);
    }
    if (price) {
      setFilCars(
        (prev) =>
          (prev = prev.filter((car) => {
            const rentalPrice = Number(car.rentalPrice.slice(1));
            const numericPrice = Number(price.value);
            return rentalPrice <= numericPrice;
          }))
      );
    }
    if (mileageFrom) {
      setFilCars(
        (prev) =>
          (prev = prev.filter((car) => car.mileage >= Number(mileageFrom)))
      );
    }
    if (mileageTo) {
      setFilCars(
        (prev) =>
          (prev = prev.filter((car) => car.mileage <= Number(mileageTo)))
      );
    }
  };

  useEffect(() => {
    if (filters) {
      filteredCars(filters);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

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
      <div className="styledContainer flex flex-col justify-center items-center">
        {!isError ? (
          <>
            <SearchBar />
            {cars && <CardList cards={filters ? filCars : cars} />}
            {isShowLoadBtn && cars && (
              <LoadMoreBtn onClick={() => dispatch(nextPage())} />
            )}
          </>
        ) : (
          <p className="mt-24 text-white">
            Sorry, but there was an error. Try later.
          </p>
        )}
      </div>
    </div>
  );
}
