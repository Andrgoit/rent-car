import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import LangBtn from "../LangBtn/LangBtn";

export default function Header() {
  return (
    <div className=" flex justify-between bg-slate-500 p-4 items-center">
      <Logo />
      <div className=" hidden sm:flex gap-3">
        <Nav />
        <LangBtn />
      </div>
    </div>
  );
}
