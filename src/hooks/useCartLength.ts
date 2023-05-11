import { CartContext } from "@/context/cart/CartContext";
import { CartContextProps } from "@/interfaces";
import { useContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const useCartLength = () => {
  const [totalCart, setTotalCart] = useState<number>(0);
  const { getCartList } = useContext(CartContext) as CartContextProps;
  const { data: session } = useSession();

  useEffect(() => {
    async function responseCart() {
      if (session) {
        const cartResponse = await getCartList();

        const cartLength = cartResponse.products.length;

        setTotalCart(cartLength);
      }
    }
    responseCart();
  }, [session, getCartList]);

  return { totalCart };
};

export default useCartLength;
