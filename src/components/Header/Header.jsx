import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import LangBtn from "../LangBtn/LangBtn";

export default function Header() {
  return (
    <div className="  bg-slate-500 ">
      <div className="styledContainer flex justify-between items-center">
        <Logo />
        <div className=" hidden sm:flex gap-3 items-center">
          <Nav />
          <LangBtn />
        </div>
      </div>
    </div>
  );
}
