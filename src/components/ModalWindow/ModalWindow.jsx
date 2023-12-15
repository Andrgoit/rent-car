import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

Modal.setAppElement(document.getElementById("modal"));

const customStyles = {
  overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "541px",
    minHeight: "752px",
    padding: "0px",
  },
};

export default function ModalWindow({ item, closeModal, modalIsOpen }) {
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
  } = item;

  const city = address.split(",")[1];
  const country = address.split(",")[2];
  const rentalConditionsArray = rentalConditions.split("\n");

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
      shouldCloseOnOverlayClick={true}
    >
      <div className="p-10 relative">
        <button
          onClick={closeModal}
          className=" absolute top-4 right-4 hover:scale-110"
        >
          <IoMdClose size={24} />
        </button>
        <div className="max-w-[461px] max-h-[248px] rounded-xl overflow-hidden">
          <img src={img} alt="" />
        </div>
        <div className="w-[277px]">
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
        <p className="text-text_header font-Manrop font-normal text-sm mt-4 max-w-[461px]">
          {description}
        </p>
        <p className="text-text_header font-Manrop font-medium text-sm mt-4">
          Accessories and functionalities:
        </p>
        <div className="mt-2 flex flex-wrap font-Manrope text-xs text-text_primaty">
          {accessories.map((item) => (
            <span>
              {item}
              <span className=" px-[6px]">|</span>
            </span>
          ))}
          {functionalities.map((item) => (
            <span>
              {item}
              <span className=" px-[6px]">|</span>
            </span>
          ))}
        </div>
        <p className="text-text_header font-Manrop font-medium text-sm mt-6">
          Rental Conditions:
        </p>{" "}
        <div className=" mt-2 flex flex-wrap gap-2">
          {rentalConditionsArray.map((item) => (
            <span className="bg-select_bg text-xs text-text_header py-[7px] px-[14px] rounded-[35px]">
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
        <Link
          to="/order"
          className="inline-block mt-6 py-3 px-12 text-white bg-blue_primary hover:bg-blue_secondary rounded-xl"
        >
          Rental Car
        </Link>
      </div>
    </Modal>
  );
}
