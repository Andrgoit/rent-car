import React, { useEffect, useState } from "react";
import bg from "../../assets/image/bg.jpg";
import { toast } from "react-toastify";

import OrderInfo from "../../components/OrderInfo/OrderInfo";
import OrderForm from "../../components/OrderForm/OrderForm";
import ContactInfoInput from "../../components/ContactInfoInput/ContactInfoInput";

import { useSelector } from "react-redux";
import { selectOrder } from "../../redux/order/orderSelectors";

export default function OrderPage() {
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const card = useSelector(selectOrder);

  useEffect(() => {
    toast.error(
      "This is an introductory site. Don't share your real payment details here!"
    );
  }, []);

  const ContactInfoInputHandler = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "mail":
        setMail(value);
        break;

      case "phone":
        setPhone(value);
        break;

      default:
        break;
    }
  };

  return (
    <div
      className=" min-h-screen"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="pt-32 text-white styledContainer flex flex-col justify-center items-center">
        <div className=" w-full backdrop-blur-md border-black  bg-black/50 rounded-[14px] flex flex-col items-center">
          {card ? (
            <OrderInfo card={card} />
          ) : (
            <p>Sorry, but nothing has been selected to order</p>
          )}
          <ContactInfoInput
            onChange={ContactInfoInputHandler}
            mail={mail}
            phone={phone}
          />
          {card && <OrderForm price={card.rentalPrice} />}
        </div>
      </div>
    </div>
  );
}
