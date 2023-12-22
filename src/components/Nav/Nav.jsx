import { NavLink } from "react-router-dom";
import items from "./items";

export default function Nav({ onClick }) {
  const elements = items.map(({ id, label, href }) => (
    <li key={id}>
      <NavLink
        to={href}
        className="text-white text-2xl sm:text-lg py-3 px-12 font-normal hover:bg-blue_primary rounded-lg "
        onClick={onClick}
      >
        {label}
      </NavLink>
    </li>
  ));
  return (
    <ul className="flex flex-col sm:flex-row gap-20 sm:gap-3">{elements}</ul>
  );
}
