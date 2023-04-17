import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg";
import LoginIcon from "./LoginIcon";
import CartIcon from "../common/CartIcon";
import LogoIcon from "../common/LogoIcon";

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full px-[200px] p-4 bg-main">
      <div className="flex items-center justify-center gap-3">
        <Link className="flex bg-green h-12 w-12 rounded-full p-2" href={"/"}>
          <LogoIcon />
        </Link>
        <h1 className="text-m font-bold">Balto Shop</h1>
      </div>
      <div className="flex text-font gap-8 items-center justify-center">
        <div>
          <BsSearch />
        </div>
        <LoginIcon />
        <div className="bg-green p-2 rounded-full">
          <CartIcon />
        </div>
        <div>
          <CgMenuRight />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
