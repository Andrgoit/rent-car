import { useEffect } from "react";
import { HeroBg, Hero } from "../../components";
import { clearOrder } from "../../redux/order/orderSlice";
import { useDispatch } from "react-redux";

export default function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearOrder());
  }, [dispatch]);
  return (
    <>
      <HeroBg>
        <Hero />
      </HeroBg>
    </>
  );
}
