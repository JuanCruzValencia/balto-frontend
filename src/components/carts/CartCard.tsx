import { CartContextProps, Product, Products } from "@/interfaces";
import Image from "next/image";
import { useContext } from "react";
import { CartContext } from "@/context/cart/CartContext";
import { useRouter } from "next/router";

type Props = {
  product: Products;
};

const CartCard: React.FC<Props> = ({ product }) => {
  const { deleteItem } = useContext(CartContext) as CartContextProps;
  const router = useRouter();

  const handleClick = (pid: Product["_id"]) => {
    deleteItem(pid);
    router.reload(); //TODO maybe its a better way on triggerting the reload
  };

  return (
    <div className="flex gap-5 bg-white items-center justify-center p-5">
      <Image
        src={product.product.thumbnail[0]}
        width={50}
        height={50}
        alt={product.product._id}
      />
      <h4>{product.product.title}</h4>
      <span>{product.product.description.slice(0, 20)}</span>
      <span>{product.quantity}</span>
      <span>{product.product.price}</span>
      <button
        className="capitalize text-red"
        onClick={() => handleClick(product.product._id)}
      >
        delete
      </button>
    </div>
  );
};

export default CartCard;
