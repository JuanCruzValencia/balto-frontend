import { CartContext } from "@/context/cart/CartContext";
import { useContext } from "react";
import { CartContextProps, RESPONSE_STATUS } from "@/interfaces";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

type Props = {
  total: number;
};

const PayButton: React.FC<Props> = ({ total }) => {
  const { paymentIntent } = useContext(CartContext) as CartContextProps;
  const { data: session } = useSession();
  const router = useRouter();
  const cartId = session?.user?.cart;

  const handleClick = (total: number) => {
    console.log(total);
    const response = paymentIntent(total);

    if (response.status === RESPONSE_STATUS.SUCCESS) {
      console.log("Compra realizada con exito");
      router.push(`/carts/${cartId}/purchase`);
    } else {
      router.push(`/carts/${cartId}`);
    }
  };

  return (
    <>
      <button onClick={() => handleClick}>Comprar</button>;
    </>
  );
};

export default PayButton;
