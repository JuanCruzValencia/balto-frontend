import Link from "next/link";
import { BsBag } from "react-icons/bs";
import { useSession } from "next-auth/react";
import { useContext, useEffect, useRef, useState } from "react";
import { CartContext } from "@/context/cart/CartContext";
import { CartContextProps } from "@/interfaces";

const CartIcon: React.FC = () => {
  const { getCartList } = useContext(CartContext) as CartContextProps;
  const [cartList, setCartList] = useState<number>(0);
  const { data: session } = useSession();

  // useEffect(() => {
  //   async function responseCart() {
  //     const cartResponse = await getCartList();

  //     const cartLength = cartResponse.products.length;

  //     setCartList(cartLength);
  //   }
  //   responseCart();
  // });

  return (
    <div className="relative">
      <Link href={`/carts/${session?.user?.cart}`}>
        <BsBag />
      </Link>
      <div className="absolute left-2 w-5 h-5 bg-black text-white rounded-full text-center text-xs">
        {cartList}
      </div>
    </div>
  );
};

export default CartIcon;
