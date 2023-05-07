import { Cart } from "@/interfaces";
import CartCard from "./CartCard";
import CartOrderDetail from "./CartOrderDetail";

type Props = {
  cart: Cart;
};

const CartFlexContainer: React.FC<Props> = ({ cart }) => {
  return (
    <div className="flex w-full w-full h-full rounded-lg drop-shadow-xl">
      <div className="basis-3/4 flex flex-col justify-center bg-white w-full min-h-full px-10 py-5 rounded-l-lg">
        <h2 className="capitalize font-bold text-font text-l py-16">
          shopping cart
        </h2>
        <div className="flex flex-col items-center justyfy-start">
          {cart.products.map((product) => {
            return <CartCard product={product} key={product.product._id} />;
          })}
        </div>
      </div>
      <div className="basis-1/4 flex flex-col bg-green w-full min-h-full justify-between px-10 py-5 rounded-r-lg">
        <h2 className="capitalize font-bold text-font text-l py-16">
          order details
        </h2>
        <CartOrderDetail />
      </div>
    </div>
  );
};

export default CartFlexContainer;
