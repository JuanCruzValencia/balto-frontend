import Link from "next/link";
import { AiOutlineHeart } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-footer w-full flex items-center justify-between py-10 px-[200px] text-white text-xs">
      <div className="flex items-center justify-center gap-6 h-full">
        <ul className="flex flex-col items-start gap-2 h-full">
          <li>
            <Link href={"/"}>Terms of Service</Link>
          </li>
          <li>
            <Link href={"/"}>Privacy Policy</Link>
          </li>
        </ul>
        <ul className="flex flex-col items-start gap-2">
          <li>
            <Link href={"/"}>Instagram</Link>
          </li>
          <li>
            <Link href={"/"}>Facebook</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-end gap-2">
        <span className="flex items-center justify-center gap-1">
          Developed by Juan Cruz Valencia with{" "}
          <AiOutlineHeart />
        </span>
        <Link href={""} className="capitalize underline">
          about me
        </Link>
      </div>
    </div>
  );
};

export default Footer;
