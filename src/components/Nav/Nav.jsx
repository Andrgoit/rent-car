import { NavLink } from "react-router-dom";
import items from "./items";

export default function Nav() {
  const elements = items.map(({ id, label, href }) => (
    <li key={id}>
      <NavLink to={href} className="text-white">
        {label}
      </NavLink>
    </li>
  ));
  return <ul className="flex gap-3">{elements}</ul>;
}
