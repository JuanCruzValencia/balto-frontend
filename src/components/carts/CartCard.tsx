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
    <div className="flex gap-5 bg-white items-center justify-between p-5 w-full border-b-2 border-lgrey">
      <Image
        src={product.product.thumbnail[0]}
        width={70}
        height={70}
        alt={product.product._id}
      />
      <div className="flex flex-col">
        <h4 className="font-bold">{product.product.title}</h4>
        <span className="text-xs">{product.product.description.slice(0, 20)}</span>
      </div>
      <span>x{product.quantity}</span>
      <span className="font-bold">${product.product.price}</span>
      <button
        className="capitalize text-red font-bold"
        onClick={() => handleClick(product.product._id)}
      >
        delete
      </button>
    </div>
  );
};

export default CartCard;
