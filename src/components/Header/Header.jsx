import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";

export default function Header() {
  return (
    <div className="fixed left-0 right-0  backdrop-blur-md  bg-blue-600/50 z-10 shadow-lg">
      <div className="styledContainer flex justify-between items-center">
        <Logo />
        <div className=" hidden sm:flex gap-3 items-center">
          <Nav />
        </div>
      </div>
    </div>
  );
}
