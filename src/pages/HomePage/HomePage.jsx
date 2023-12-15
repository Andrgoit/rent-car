// import { useEffect } from "react";
import { HeroBg, Hero } from "../../components";
// import { toast } from "react-toastify";

export default function HomePage() {
  // useEffect(() => {
  //   toast.error("Это ознакомительный сайт. Не оставляйте свои личные данные");
  // }, []);
  return (
    <>
      <HeroBg>
        <Hero />
      </HeroBg>
    </>
  );
}
