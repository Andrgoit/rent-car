import Button from "../Button/Button";

export default function Hero() {
  return (
    <div className=" backdrop-blur-md bg-black/40 w-[500px] rounded-lg flex flex-col gap-7 items-start text-white px-6 py-12">
      <p className=" text-blue_primary text-xl sm:text-3xl font-semibold">
        Fast and Easy Way to Rent a Car
      </p>
      <p className=" text-2xl sm:text-6xl">
        Explore the world with comfortable car
      </p>
      <Button to="/catalog">Get Start</Button>
    </div>
  );
}
