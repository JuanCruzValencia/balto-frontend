import { Products } from "@/interfaces";
import Image from "next/image";
import DeleteFromCartBtn from "../common/DeleteFromCartBtn";

type Props = {
  product: Products;
  render: () => void;
};

const CartCard: React.FC<Props> = ({ product, render }) => {
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
        <span className="text-xs">
          {product.product.description.slice(0, 20)}
        </span>
      </div>
      <span>x{product.quantity}</span>
      <span className="font-bold">${product.product.price}</span>
      <DeleteFromCartBtn
        pid={product.product._id}
        className="capitalize text-red font-bold"
        render={render}
      />
    </div>
  );
};

export default CartCard;
