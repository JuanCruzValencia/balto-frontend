import Link from "next/link";
import { BsBag, BsSearch } from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg";
import LoginIcon from "./LoginIcon";

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full px-[200px] p-4 bg-main">
      <div>
        <Link className="" href={"/"}>
          LOGO
        </Link>
      </div>
      <div className="flex text-font gap-8 items-center justify-center">
        <div>
          <BsSearch />
        </div>
        <LoginIcon />
        <div className="bg-green p-2 rounded-full">
          <Link href={"/cart"}>
            <BsBag />
          </Link>
        </div>
        <div>
          <CgMenuRight />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
