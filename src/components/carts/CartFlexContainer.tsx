import { Cart } from "@/interfaces";
import CartCard from "./CartCard";

type Props = {
  cart: Cart;
};

const CartFlexContainer: React.FC<Props> = ({ cart }) => {
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
