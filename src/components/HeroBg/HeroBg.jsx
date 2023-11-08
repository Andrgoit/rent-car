import bg from "../../assets/image/home_bg.webp";

export default function HeroBg({ children }) {
  return (
    <div
      className="w-full h-screen flex justify-start items-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {children}
    </div>
  );
}
