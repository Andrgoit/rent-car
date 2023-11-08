import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import LangBtn from "../LangBtn/LangBtn";

export default function Header() {
  return (
    <div className=" flex justify-between p-4 bg-slate-400">
      <Logo />
      <Nav />
      <LangBtn />
    </div>
  );
}
