import { useEffect } from "react";
import { HeroBg, Hero } from "../../components";
import { toast } from "react-toastify";

export default function HomePage() {
  useEffect(() => {
    toast.error("Это знакомительный сайт. Не оставляйте свои личные данные");
  }, []);
  return (
    <div>
      <HeroBg>
        <Hero />
      </HeroBg>
    </div>
  );
}
