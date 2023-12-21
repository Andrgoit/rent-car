import React from "react";

export default function OrderInfo({ card = {} }) {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    address,
    rentalConditions,
    mileage,
  } = card;

  const city = address.split(",")[1];
  const country = address.split(",")[2];
  const rentalConditionsArray = rentalConditions.split("\n");
  return (
    <div className="p-10 relative flex flex-col items-center border-b-[1px] border-b-text_primaty">
      <div className="max-w-[461px] max-h-[248px] rounded-xl overflow-hidden">
        <img src={img} alt="" />
      </div>
      <div className="max-w-[461px]">
        <div className=" mt-4 flex gap-1 font-Manrope">
          {make} <span className="text-blue_primary"> {model}, </span> {year}
        </div>
        <div className="mt-2 flex flex-wrap font-Manrope text-xs text-text_primaty">
          {city}
          <span className=" px-[6px]">|</span>
          {country}
          <span className=" px-[6px]">|</span>
          Id:{id}
          <span className=" px-[6px]">|</span>
          Year: {year}
          <span className=" px-[6px]">|</span>
          Type: {type}
          <span className=" px-[6px]">|</span>
          Fuel Consumption: {fuelConsumption}
          <span className=" px-[6px]">|</span>
          Engine Size: {engineSize}
        </div>
      </div>
      <p className="text-text_primaty font-Manrop font-normal text-sm mt-4 max-w-[461px]">
        {description}
      </p>
      <p className="text-text_primaty underline font-Manrop font-medium text-sm mt-4">
        Accessories and functionalities:
      </p>
      <div className="mt-2 flex flex-wrap font-Manrope text-xs text-text_primaty">
        {accessories.map((list) => (
          <span key={list}>
            {list}
            <span className=" px-[6px]">|</span>
          </span>
        ))}
        {functionalities.map((item) => (
          <span key={item}>
            {item}
            <span className=" px-[6px]">|</span>
          </span>
        ))}
      </div>
      <p className="text-text_primaty underline font-Manrop font-medium text-sm mt-6">
        Rental Conditions:
      </p>{" "}
      <div className=" mt-2 flex flex-wrap gap-2">
        {rentalConditionsArray.map((item) => (
          <span
            key={item}
            className="bg-select_bg text-xs text-text_header py-[7px] px-[14px] rounded-[35px]"
          >
            {item}
          </span>
        ))}
        <span className="bg-select_bg text-xs font-Manrope font-normal text-text_header py-[7px] px-[14px] rounded-[35px]">
          Mileage: <span className=" text-blue_primary ">{mileage}</span>
        </span>
        <span className="bg-select_bg text-xs font-Manrope text-text_header py-[7px] px-[14px] rounded-[35px]">
          Price: <span className=" text-blue_primary ">{rentalPrice}</span>
        </span>
      </div>
    </div>
  );
}
