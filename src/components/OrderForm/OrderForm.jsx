import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import getAmountDays from "../../utils/getAmountDays";
import "./react-datepicker.css";
import PayCard from "../PayCard/PayCard";

export default function OrderForm({ price = "$10" }) {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [amountDays, setAmountDays] = useState(null);

  const totalPrice = Number(price.slice(1)) * Number(amountDays);

  useEffect(() => {
    setAmountDays(getAmountDays(startDate, endDate));
  }, [endDate, startDate]);

  return (
    <>
      <div className="py-4 font-Manrope">
        <div className="py-5 text-black flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-11 ">
          <DatePicker
            placeholderText="Select rental dates"
            selectsRange={true}
            startDate={startDate}
            minDate={new Date()}
            endDate={endDate}
            onChange={(update) => {
              setDateRange(update);
            }}
            isClearable={true}
            //   inline
          />
          {amountDays && (
            <div className="text-white flex gap-1 items-center">
              <span className=" p-1 bg-orange-300 rounded-md">
                {amountDays} days
              </span>{" "}
              X <span className=" p-1 bg-cyan-300 rounded-md">{price}</span> ={" "}
              <span className="p-1 bg-green-400 rounded-md">
                $ {totalPrice}
              </span>
            </div>
          )}
        </div>
      </div>
      <PayCard />
    </>
  );
}
