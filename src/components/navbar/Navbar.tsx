import Link from "next/link";
import { BsBag, BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { CgMenuRight } from "react-icons/cg";

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
        <Link className="capitalize flex items-center gap-2" href={"/login"}>
          <BiUser /> log in
        </Link>
        <div className="bg-green p-2 rounded-full">
          <Link href={"/login"}>
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
