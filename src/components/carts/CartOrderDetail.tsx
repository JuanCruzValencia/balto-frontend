import { Cart } from "@/interfaces";
import CheckoutBtn from "../common/CheckoutBtn";
import { cartTotals } from "./utils";
import { useEffect, useState } from "react";

type Props = {
  cart: Cart;
};

const CartOrderDetail: React.FC<Props> = ({ cart }) => {
  const [cartTotal, setCartTotal] = useState<number>(0);

  useEffect(() => {
    const total = cartTotals(cart);

    setCartTotal(total);
  }, [cart]);

  return (
    <div className="flex flex-col items-center p-5 w-full border-t-2 border-font">
      <span className="text-m">Total cost:</span>
      <span className="font-bold text-l mb-5">${cartTotal.toFixed(2)}</span>
      <CheckoutBtn cartId={cart._id} />
    </div>
  );
};

export default CartOrderDetail;
