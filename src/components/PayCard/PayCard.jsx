import { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

export default function PayCard() {
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  return (
    <div className="py-10 text-black">
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />
      <form className="flex flex-col text-white">
        <div className="flex flex-col gap-5 sm:flex-row pt-5">
          <label className="flex flex-col gap-1">
            Card Number
            <input
              type="number"
              name="number"
              placeholder="Card Number"
              value={state.number}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              className="text-black rounded-md  py-2 px-4  font-Manrope"
              autoComplete="off"
            />
          </label>
          <label className="flex flex-col gap-1">
            Name
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              className="text-black rounded-md  py-2 px-4  font-Manrope"
              autoComplete="off"
            />
          </label>
        </div>
        <div className="flex flex-col gap-5 sm:flex-row pt-5">
          <label className="flex flex-col gap-1">
            Valid Thru
            <input
              type="tel"
              name="expiry"
              //   className="form-control"
              placeholder="Valid Thru"
              pattern="\d\d/\d\d"
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              className="text-black rounded-md  py-2 px-4  font-Manrope"
              autoComplete="off"
            />
          </label>
          <label className="flex flex-col gap-1">
            CVC
            <input
              type="number"
              name="cvc"
              //   className="form-control"
              className="text-black rounded-md  py-2 px-4  font-Manrope"
              placeholder="CVC"
              pattern="\d{3,4}"
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              autoComplete="off"
            />
          </label>
        </div>
      </form>
    </div>
  );
}
