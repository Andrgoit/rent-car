import React from "react";

export default function MileageSelector({ onChange }) {
  return (
    <div className="flex flex-col justify-start gap-2">
      <span className=" font-normal text-sm text-text_primaty">
        Сar mileage / km
      </span>
      <div className="flex items-center">
        <input
          onChange={onChange}
          type="number"
          placeholder="From"
          name="mileageFrom"
          className="bg-select_bg w-[160px] h-12 rounded-l-xl pl-6 outline-blue_primary"
          style={{ borderRight: "1px solid rgba(138, 138, 137, 0.20)" }}
        />
        <input
          onChange={onChange}
          type="number"
          placeholder="To"
          name="mileageTo"
          className="bg-select_bg w-[160px] h-12 rounded-r-xl pl-6 outline-blue_primary"
        />
      </div>
    </div>
  );
}
