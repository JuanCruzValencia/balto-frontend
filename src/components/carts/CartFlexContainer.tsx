import { Cart, CartContextProps } from "@/interfaces";
import CartCard from "./CartCard";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/context/cart/CartContext";

type Props = {
  cart: Cart;
};

const CartFlexContainer: React.FC<Props> = ({ cart }) => {
  const { getCartList } = useContext(CartContext) as CartContextProps;
  const [cartList, setCartList] = useState<number>();

  useEffect(() => {
    async function responseCart() {
      const cartResponse = await getCartList();

      const cartLength = cartResponse.products.length;
      
      setCartList(cartLength);
    }
    responseCart();
  });

  return (
    <>
      <h1 className="capitalize font-bold text-l">shopping cart</h1>
      <div className="flex flex-col items-center justyfy-start">
        {cart.products.map((product) => {
          return <CartCard product={product} key={product.product._id} />;
        })}
      </div>
    </>
  );
};

export default CartFlexContainer;
