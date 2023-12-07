import cards from "../../data/advertsCars.json";
import CardItem from "./CardItem/CardItem";
const card = [cards[0]];

export default function CardList() {
  return (
    <ul className="flex flex-wrap justify-between">
      {cards.map((item) => (
        <CardItem key={item.id} item={item} />
      ))}
    </ul>
  );
}
