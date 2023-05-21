import Link from "next/link";
import { BsBag } from "react-icons/bs";
import { useSession } from "next-auth/react";
import { useContext } from "react";
import { CartContext } from "@/context/cart/CartContext";
import { CartContextProps } from "@/interfaces";

const CartIcon: React.FC = () => {
  const { data: session } = useSession();
  const { cartCount } = useContext(CartContext) as CartContextProps;

  if (session) {
    return (
      <div className="relative">
        <Link href={`/carts/${session?.user?.cart}`}>
          <BsBag />
        </Link>
        <div className="absolute left-2 w-5 h-5 bg-black text-white rounded-full text-center text-xs">
          {cartCount}
        </div>
      </div>
    );
  }
  return (
    <>
      <Link href={`/`}>
        <BsBag />
      </Link>
    </>
  );
};

export default CartIcon;
