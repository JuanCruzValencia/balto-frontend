import Link from "next/link";
import LogoIcon from "../common/LogoIcon";

const HomeLogoIcon: React.FC = () => {
  return (
    <Link className="flex bg-green h-12 w-12 rounded-full p-2" href={"/"}>
      <LogoIcon />
    </Link>
  );
};

export default HomeLogoIcon;
