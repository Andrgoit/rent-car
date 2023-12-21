import React, { useState } from "react";
import noImg from "../../../assets/image/noImage.jpg";
import { ReactComponent as Heart } from "../../../assets/icons/heart.svg";
import ModalWindow from "../../ModalWindow/ModalWindow";

import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../../redux/favorite/favoriteSlice";
import { selectFavorite } from "../../../redux/favorite/favoriteSelectors";

export default function CardItem({ item }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const favoriteList = useSelector(selectFavorite);
  const isFavorite = favoriteList.some((el) => el.id === item.id);

  const {
    year,
    make,
    model,
    type,
    img,
    accessories,
    rentalPrice,
    rentalCompany,
    address,
    mileage,
  } = item;

  const city = address.split(",")[1];
  const country = address.split(",")[2];

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <li className="w-[274px] h-[426px] mt-[50px] backdrop-blur-md  bg-black/50 flex flex-col justify-between rounded-[14px] overflow-hidden">
      <div
        className="w-[274px] h-[268px] rounded-[14px] overflow-hidden relative"
        style={{
          background: `url(${noImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <img
          src={img}
          alt={`${make} ${model}`}
          loading="lazy"
          className="w-full h-full object-cover "
        />
        <div
          className={` ${
            isFavorite ? "fill-blue_secondary" : "fill-transparent"
          } cursor-pointer  hover:fill-blue_secondary hover:scale-110 transition-all duration-300 absolute w-[18px] h-[18px] top-[14px] right-[14px]`}
          onClick={() => {
            dispatch(toggleFavorite(item));
          }}
        >
          <Heart />
        </div>
      </div>
      <div className=" px-1 mt-4 flex justify-between items-center font-Manrope text-white">
        <div>
          {make} <span className="text-blue_primary">{model}, </span> {year}
        </div>
        <span className="text-orange-300">{rentalPrice}</span>
      </div>
      <div className="px-2 h-8 overflow-y-hidden mt-2 flex flex-wrap font-Manrope text-xs text-text_primaty">
        {city}
        <span className=" px-[6px]">|</span>
        {country}
        <span className=" px-[6px]">|</span>
        {rentalCompany}
        <span className=" px-[6px]">|</span>
        {type}
        <span className=" px-[6px]">|</span>
        {model}
        <span className=" px-[6px]">|</span>
        {mileage}
        <span className=" px-[6px]">|</span>
        {accessories[0]}
      </div>
      <button
        className=" font-Manrope text-sm font-semibold text-white w-full py-3 bg-blue_primary hover:bg-blue_secondary rounded-xl transition-all duration-300"
        onClick={() => setIsOpen(!modalIsOpen)}
      >
        Learn more
      </button>
      {modalIsOpen && (
        <ModalWindow
          item={item}
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
        />
      )}
    </li>
  );
}
