import { CartContext } from "@/context/cart/CartContext";
import { CartContextProps, Product } from "@/interfaces";
import { useRouter } from "next/router";
import { useContext } from "react";

type Props = {
  pid: Product["_id"];
};

const AddToCartButton: React.FC<Props> = ({ pid }) => {
  const { addToCart } = useContext(CartContext) as CartContextProps;
  const router = useRouter();

  const handleClick = (pid: Product["_id"]) => {
    addToCart(pid);

    router.reload();
  };

  return <button onClick={() => handleClick(pid)}>add to cart</button>;
};

export default AddToCartButton;
