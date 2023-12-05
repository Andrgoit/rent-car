import { NavLink } from "react-router-dom";
import items from "./items";

export default function Nav() {
  const elements = items.map(({ id, label, href }) => (
    <li key={id}>
      <NavLink
        to={href}
        className="text-white py-3 px-12 font-normal hover:bg-blue_primary rounded-lg "
      >
        {label}
      </NavLink>
    </li>
  ));
  return <ul className="flex gap-3">{elements}</ul>;
}
