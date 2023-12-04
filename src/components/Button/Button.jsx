import { Link } from "react-router-dom";

export default function Button({ to, children }) {
  return (
    <Link
      to={to}
      className=" py-3 px-12 text-white font-normal rounded-lg  bg-blue_primary hover:bg-blue_secondary"
    >
      {children}
    </Link>
  );
}
