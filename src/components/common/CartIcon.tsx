import Link from "next/link";
import { BsBag } from "react-icons/bs";
import { useSession } from "next-auth/react";
import { useContext, useEffect, useRef, useState } from "react";
import { CartContext } from "@/context/cart/CartContext";
import { CartContextProps } from "@/interfaces";

const CartIcon: React.FC = () => {
  const { getCartList } = useContext(CartContext) as CartContextProps;
  const [cartLength, setCartLength] = useState<number>(0);
  const isCancelled = useRef<boolean>(false);
  const { data: session } = useSession();

  useEffect(() => {
    if (!isCancelled) {
      setCartLength(getCartList().length);
    }

    return () => {
      isCancelled.current = true;
    };
  }, [getCartList]);

  return (
    <div className="relative">
      <Link href={`/carts/${session?.user?.cart}`}>
        <BsBag />
      </Link>
      <div className="absolute left-2 w-5 h-5 bg-black text-white rounded-full text-center text-xs">{cartLength}</div>
    </div>
  );
};

export default CartIcon;
