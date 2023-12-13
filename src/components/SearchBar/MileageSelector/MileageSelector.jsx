import React from "react";

export default function MileageSelector({ onChange }) {
  return (
    <div className="flex flex-col gap-2 justify-end">
      <span className=" font-normal text-sm text-text_primaty">
        Сar mileage / km
      </span>
      <div className="flex items-center">
        <form
          className="bg-select_bg w-[160px] flex gap-2 items-center h-12 rounded-l-xl pl-6  focus:outline-blue_primary"
          style={{ borderRight: "1px solid rgba(138, 138, 137, 0.20)" }}
        >
          <label className="flex gap-2">
            <span>From</span>
            <input
              onChange={onChange}
              type="number"
              name="mileageFrom"
              className="bg-transparent outline-none w-[80px]"
            />
          </label>
        </form>
        <form className="bg-select_bg w-[160px] flex gap-2 items-center h-12 rounded-r-xl pl-6  focus:outline-blue_primary">
          <label className="flex gap-2">
            <span>To</span>
            <input
              onChange={onChange}
              type="number"
              name="mileageTo"
              className="bg-transparent outline-none w-[80px]"
            />
          </label>
        </form>
      </div>
    </div>
  );
}
