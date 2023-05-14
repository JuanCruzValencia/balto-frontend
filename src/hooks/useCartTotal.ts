import { CartContext } from "@/context/cart/CartContext";
import { Cart, CartContextProps } from "@/interfaces";
import { useContext, useEffect, useState } from "react";

const useCartTotal = () => {
  const [total, setTotal] = useState<number | undefined>(0);
  const [cart, setCart] = useState<Cart | null>(null);
  const { getCartList } = useContext(CartContext) as CartContextProps;

  useEffect(() => {
    const getCart = async () => {
      const res = await getCartList();

      setCart(res);
    };

    getCart();
  }, []);

  if (cart) {
    const getTotal = cart?.products
      .map((product) => {
        return product.product.price * product.quantity;
      })
      .reduce((acc, curr) => acc + curr, 0);

      console.log(getTotal);
      

    setTotal(getTotal);
  }

  return total;
};

export default useCartTotal;
