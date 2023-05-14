import { CartContext } from "@/context/cart/CartContext";
import { CartContextProps, Product, RESPONSE_STATUS } from "@/interfaces";
import { toast, ToastContainer } from "react-toastify";
import { useContext } from "react";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  pid: Product["_id"];
  className: string;
};

const DeleteFromCartBtn: React.FC<Props> = ({ pid, className }) => {
  const { deleteItem } = useContext(CartContext) as CartContextProps;

  const notify = () => {
    toast.error("Producto eliminado del carrito!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const handleClick = async (pid: Product["_id"]) => {
    const response = await deleteItem(pid);

    if (response.status === RESPONSE_STATUS.SUCCESS) {
      notify();
    }
  };

  return (
    <>
      <button onClick={() => handleClick(pid)} className={className}>
        delete
      </button>
      <ToastContainer />
    </>
  );
};

export default DeleteFromCartBtn;
