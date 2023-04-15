import { Cart } from "@/interfaces";

type Props = {
  cart: Cart;
};

const CartFlexContainer: React.FC<Props> = ({ cart }) => {
  return (
    <>
      <h1>Cart Container</h1>
    </>
  );
};

export default CartFlexContainer;
