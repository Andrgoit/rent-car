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
} from "../../redux/cars/carsSelectors";

import { fetchCars } from "../../redux/cars/carsOperations";
import { clearCarList, nextPage, resetPage } from "../../redux/cars/carsSlice";
import { clearOrder } from "../../redux/order/orderSlice";

import bg from "../../assets/image/bg.jpg";

export default function CatalogPage() {
  const [filCars, setFilCars] = useState([]);
  const [filters, setFilters] = useState(null);
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectLoading);
  const isShowLoadBtn = useSelector(selectIsShowLoadBtn);
  const page = useSelector(selectPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearOrder());
    dispatch(resetPage());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCars(page));
  }, [dispatch, page]);

  // useEffect(() => {
  //   if (filters) {
  //     const {
  //       brand = "",
  //       price = "",
  //       mileageFrom = "",
  //       mileageTo = "",
  //     } = filters;

  //     if (brand) {
  //       const filteredCars = cards.filter(
  //         (card) => card.make.toLowerCase() === brand.value.toLowerCase()
  //       );
  //       setFilCars((prev) => (prev = filteredCars));
  //       console.log("filteredCars-brand", filteredCars);
  //     } else {
  //       setFilCars(cards);
  //     }
  //     if (price) {
  //       const filteredCars = filCars.filter((car) => {
  //         const rentalPrice = Number(car.rentalPrice.slice(1));
  //         const numericPrice = Number(price.value);
  //         return rentalPrice <= numericPrice;
  //       });
  //       setFilCars((prev) => (prev = filteredCars));
  //       console.log("filteredCars-numericPrice", filteredCars);
  //     }
  //     if (mileageFrom) {
  //       const filteredCars = filCars.filter(
  //         (car) => car.mileage >= Number(mileageFrom)
  //       );
  //       setFilCars((prev) => (prev = filteredCars));
  //       console.log("filteredCars-mileageFrom", filteredCars);
  //     }
  //     if (mileageTo) {
  //       const filteredCars = filCars.filter(
  //         (car) => car.mileage <= Number(mileageTo)
  //       );
  //       setFilCars((prev) => (prev = filteredCars));
  //       console.log("filteredCars-mileageTo", filteredCars);
  //     }
  //   } else {
  //     setFilCars(cards);
  //   }
  // }, [cards, filCars, filters]);

  // const setFilter = (filter) => {
  //   setFilters(filter);
  //   setFilteredCars();
  // };

  // const setFilteredCars = () => {
  //   const {
  //     brand = "",
  //     price = "",
  //     mileageFrom = "",
  //     mileageTo = "",
  //   } = filters;

  //   if (brand) {
  //     const filteredCars = cards.filter(
  //       (card) => card.make.toLowerCase() === brand.value.toLowerCase()
  //     );
  //     setFilCars((prev) => (prev = filteredCars));
  //     console.log("filteredCars-brand", filteredCars);
  //   } else {
  //     setFilCars(cards);
  //   }
  //   if (price) {
  //     const filteredCars = filCars.filter((car) => {
  //       const rentalPrice = Number(car.rentalPrice.slice(1));
  //       const numericPrice = Number(price.value);
  //       return rentalPrice <= numericPrice;
  //     });
  //     setFilCars((prev) => (prev = filteredCars));
  //     console.log("filteredCars-numericPrice", filteredCars);
  //   }
  //   if (mileageFrom) {
  //     const filteredCars = filCars.filter(
  //       (car) => car.mileage >= Number(mileageFrom)
  //     );
  //     setFilCars((prev) => (prev = filteredCars));
  //     console.log("filteredCars-mileageFrom", filteredCars);
  //   }
  //   if (mileageTo) {
  //     const filteredCars = filCars.filter(
  //       (car) => car.mileage <= Number(mileageTo)
  //     );
  //     setFilCars((prev) => (prev = filteredCars));
  //     console.log("filteredCars-mileageTo", filteredCars);
  //   }
  // };

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
        <SearchBar submit={() => {}} />
        {cars && <CardList cards={cars} />}
        {isShowLoadBtn && cars && (
          <LoadMoreBtn onClick={() => dispatch(nextPage())} />
        )}
      </div>
    </div>
  );
}
