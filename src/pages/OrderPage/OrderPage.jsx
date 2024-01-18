import bg from "../../assets/image/bg.jpg";

import OrderInfo from "../../components/OrderInfo/OrderInfo";
import OrderForm from "../../components/OrderForm/OrderForm";
import { toast } from "react-toastify";

import { useSelector } from "react-redux";
import { selectOrder } from "../../redux/order/orderSelectors";
import { useEffect } from "react";

export default function OrderPage() {
  const card = useSelector(selectOrder);

  useEffect(() => {
    toast.error(
      "This is an introductory site. Don't share your real payment details here!"
    );
  }, []);

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
            <>
              <OrderInfo card={card} />
              <OrderForm price={card.rentalPrice} />
            </>
          ) : (
            <p>Sorry, but nothing has been selected to order</p>
          )}
        </div>
      </div>
    </div>
  );
}
