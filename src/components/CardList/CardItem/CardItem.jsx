import React, { useState } from "react";
import noImg from "../../../assets/image/noImage.jpg";
import { ReactComponent as Heart } from "../../../assets/icons/heart.svg";
import ModalWindow from "../../ModalWindow/ModalWindow";

export default function CardItem({ item }) {
  const [modalIsOpen, setIsOpen] = useState(false);

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
    <li className="w-[274px] h-[426px] mt-[50px] shadow-lg cursor-pointer hover:scale-105 transition-all duration-200">
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
          className="w-full h-full object-cover "
        />
        <div className=" fill-transparent hover:fill-blue_secondary absolute w-[18px] h-[18px] top-[14px] right-[14px]">
          <Heart />
        </div>
      </div>
      <div className=" mt-4 flex justify-between items-center font-Manrope">
        <div>
          {make} <span className="text-blue_primary">{model}, </span> {year}
        </div>
        {rentalPrice}
      </div>
      <div className=" h-10 overflow-y-hidden mt-2 flex flex-wrap font-Manrope text-xs text-text_primaty">
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
        className=" mt-[28px] font-Manrope text-sm font-semibold text-white w-full py-3 bg-blue_primary hover:bg-blue_secondary rounded-xl"
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
