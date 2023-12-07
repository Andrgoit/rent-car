import Select from "react-select";

const options = [
  { label: "10", value: "10" },
  { label: "20", value: "20" },
  { label: "30", value: "30" },
  { label: "40", value: "40" },
  { label: "50", value: "50" },
  { label: "60", value: "60" },
  { label: "70", value: "70" },
  { label: "80", value: "80" },
  { label: "90", value: "90" },
  { label: "100", value: "100" },
  { label: "110", value: "110" },
  { label: "120", value: "120" },
];

const customStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "#F7F7FB",
    borderRadius: "14px",
    width: "125px",
    height: "48px",
  }),
};

export default function PriceSelector({ setPrice }) {
  return (
    <div className="flex flex-col justify-start gap-2">
      <span className=" font-normal text-sm text-text_primaty">
        Price/ 1 hour
      </span>
      <Select
        placeholder="To $"
        isSearchable
        options={options}
        onChange={setPrice}
        styles={customStyles}
      />
    </div>
  );
}