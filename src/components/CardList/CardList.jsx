import cards from "../../data/advertsCars.json";
import CardItem from "./CardItem/CardItem";

export default function CardList() {
  return (
    <ul className="flex flex-wrap justify-center sm:justify-between">
      {cards.map((item) => (
        <CardItem key={item.id} item={item} />
      ))}
    </ul>
  );
}
