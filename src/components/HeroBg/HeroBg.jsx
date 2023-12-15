import bg from "../../assets/image/home_bg.webp";
import bg1 from "../../assets/image/bg.jpg";
import bg2 from "../../assets/image/bg2.jpg";

export default function HeroBg({ children }) {
  return (
    <div
      className="w-full h-screen"
      style={{
        backgroundImage: `url(${bg2})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {children}
    </div>
  );
}
