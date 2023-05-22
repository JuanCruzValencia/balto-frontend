import { CartContext } from "@/context/cart/CartContext";
import { CartContextProps, Product, RESPONSE_STATUS } from "@/interfaces";
import { toast } from "react-toastify";
import { useContext } from "react";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  pid: Product["_id"];
  className: string;
};

const AddToCartButton: React.FC<Props> = ({ pid, className }) => {
  const { addToCart } = useContext(CartContext) as CartContextProps;

  const notify = () => {
    toast.success("Producto agregado al carrito!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const notifyError = () => {
    toast.error("Usted ya posee este producto!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const handleClick = async (pid: Product["_id"]) => {
    try {
      const response = await addToCart(pid);

      if (response.status === RESPONSE_STATUS.SUCCESS) notify();
    } catch (error: any) {
      if (error.response && error.response.status === RESPONSE_STATUS.AUTH)
        notifyError();
    }
  };

  return (
    <>
      <button onClick={() => handleClick(pid)} className={className}>
        add to cart
      </button>
    </>
  );
};

export default AddToCartButton;
