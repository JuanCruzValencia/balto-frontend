import { CgMenuRight } from "react-icons/cg";
import LoginIcon from "./LoginIcon";
import CartIcon from "../common/CartIcon";
import AdminLink from "../common/AdminLink";
import useIsAdmin from "@/hooks/useIsAdmin";
import SearchBarIcon from "../common/SearchBarIcon";
import HomeLogoIcon from "../common/HomeLogoLink";

const Navbar = () => {
  const { isAdmin } = useIsAdmin();

  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full px-[200px] p-4 bg-main">
      <div className="flex items-center justify-center gap-3">
        <HomeLogoIcon />
        <h1 className="text-m font-bold">Balto Shop</h1>
      </div>
      <div className="flex text-font gap-8 items-center justify-center">
        <SearchBarIcon />
        <LoginIcon />
        {isAdmin ? <AdminLink /> : null}
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
