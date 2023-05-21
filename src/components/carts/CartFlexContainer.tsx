import { Cart, CartContextProps } from "@/interfaces";
import CartCard from "./CartCard";
import CartOrderDetail from "./CartOrderDetail";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "@/context/cart/CartContext";

type Props = {
  cart: Cart;
};

const CartFlexContainer: React.FC<Props> = ({ cart }) => {
  const { cartCount } = useContext(CartContext) as CartContextProps;

  return (
    <div className="flex w-full w-full h-full rounded-lg drop-shadow-xl">
      <div className="basis-3/4 flex flex-col justify-center bg-white w-full min-h-full px-10 py-5 rounded-l-lg">
        <h2 className="capitalize font-bold text-font text-l py-16">
          shopping cart
        </h2>
        {cartCount > 0 ? (
          <div className="flex flex-col items-center justyfy-start">
            {cart.products.map((product) => {
              return <CartCard product={product} key={product.product._id} />;
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-10">
            <span className="font-bold uppercase">the cart is empty...</span>
            <Link href={"/"}>
              <button className="text-s bg-footer rounded text-white p-2 px-4 uppercase shadow-xl font-bold hover:bg-font">
                shop now
              </button>
            </Link>
          </div>
        )}
      </div>
      <div className="basis-1/4 flex flex-col bg-green w-full min-h-full justify-between px-10 py-5 rounded-r-lg">
        <h2 className="capitalize font-bold text-font text-l py-16 self-center">
          order details
        </h2>
        <CartOrderDetail cart={cart} />
      </div>
    </div>
  );
};

export default CartFlexContainer;
