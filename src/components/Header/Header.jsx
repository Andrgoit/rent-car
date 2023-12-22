import { useState } from "react";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileMenu from "../MobileMenu/MobileMenu";

export default function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handlerCloseBtn = () => {
    setIsOpenMenu((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpenMenu(false);
  };
  return (
    <div className="fixed left-0 right-0  backdrop-blur-md  bg-blue-600/50 z-10 shadow-lg">
      <div className="styledContainer flex justify-between items-center">
        <Logo />
        <div className=" hidden sm:flex gap-3 items-center">
          <Nav />
        </div>
        <div
          className="w-7  h-7 block sm:hidden text-white cursor-pointer"
          onClick={handlerCloseBtn}
        >
          <GiHamburgerMenu size={28} />
        </div>
      </div>
      {isOpenMenu && (
        <MobileMenu onClose={handlerCloseBtn}>
          <Nav onClick={closeMenu} />
        </MobileMenu>
      )}
    </div>
  );
}
