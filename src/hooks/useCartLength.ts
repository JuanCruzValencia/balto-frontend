import { CartContext } from "@/context/cart/CartContext";
import { CartContextProps } from "@/interfaces";
import { useContext, useEffect, useState } from "react";

const useCartLength = () => {
  const [totalCart, setTotalCart] = useState<number>(0);
  const { getCartList } = useContext(CartContext) as CartContextProps;

  useEffect(() => {
    async function responseCart() {
      const cartResponse = await getCartList();

      const cartLength = cartResponse.products.length;

      setTotalCart(cartLength);
    }
    responseCart();
  });

  return totalCart;
};

export default useCartLength;
