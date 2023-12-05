import options from "../../../data/makes.json";
import Select from "react-select";

const customStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "#F7F7FB",
    borderRadius: "14px",
    width: "224px",
    height: "48px",
  }),
};

export default function BrandSelector({ setBrand }) {
  return (
    <div className="flex flex-col justify-start gap-2">
      <span className=" font-normal text-sm text-text_primaty">Car brands</span>
      <Select
        placeholder={"Enter the text"}
        isSearchable
        options={options}
        onChange={setBrand}
        styles={customStyles}
      />
    </div>
  );
}
