import bg from "../../assets/image/bg.jpg";
import cards from "../../data/advertsCars.json";
import OrderInfo from "../../components/OrderInfo/OrderInfo";
import OrderForm from "../../components/OrderForm/OrderForm";

export default function OrderPage() {
  const card = cards[0];
  const { rentalPrice } = card;

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
          <OrderInfo card={card} />
          <OrderForm price={rentalPrice} />
        </div>
      </div>
    </div>
  );
}
