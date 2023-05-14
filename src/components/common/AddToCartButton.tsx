import { CartContext } from "@/context/cart/CartContext";
import { CartContextProps, Product, RESPONSE_STATUS } from "@/interfaces";
import { toast, ToastContainer } from "react-toastify";
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

  const handleClick = async (pid: Product["_id"]) => {
    const response = await addToCart(pid);

    if (response.status === RESPONSE_STATUS.SUCCESS) notify();
  };

  return (
    <>
      <button onClick={() => handleClick(pid)} className={className}>
        add to cart
      </button>
      <ToastContainer />
    </>
  );
};

export default AddToCartButton;
