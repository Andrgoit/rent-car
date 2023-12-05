import bg from "../../assets/image/home_bg.webp";

export default function HeroBg({ children }) {
  return (
    <div
      className="w-full h-screen"
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
