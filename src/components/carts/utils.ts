import { Cart } from "@/interfaces";

export const cartTotals = (cart: Cart) => {
  const total = cart.products
    .map((product) => {
      return product.product.price * product.quantity;
    })
    .reduce((acc, curr) => acc + curr, 0);

  return total;
};
