import { Cart } from "@/interfaces";
import { useState } from "react";

type Props = {
  cart: Cart;
};

const useCartTotal = ({ cart }: Props): number => {
  const [total, setTotal] = useState<number>(0);

  const getTotal = cart.products
    .map((product) => {
      return product.product.price * product.quantity;
    })
    .reduce((acc, curr) => acc + curr, 0);

  setTotal(getTotal);

  return total;
};

export default useCartTotal;
