import { CartContextProps, Product } from "@/interfaces";
import { BrowserRest } from "@/utils/frontend/browser-rest";
import { createContext } from "react";
import { useSession } from "next-auth/react";

export const CartContext = createContext<CartContextProps | {}>({});

type Props = {
  children: React.ReactNode;
};

export const CartProvider: React.FC<Props> = ({ children }) => {
  const { data: session } = useSession();
  const userCartId = session?.user?.cart;

  const getCartList = async () => {
    const response = await BrowserRest.get(`/carts/${userCartId}`, {
      headers: {
        Authorization: `Bearer ${session?.user?.token}`,
      },
    });

    return response.data.payload;
  };

  const addToCart = async (pid: Product["_id"]) => {
    const response = await BrowserRest.post(
      `/carts/${userCartId}/product/${pid}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${session?.user?.token}`,
        },
      }
    );

    return response;
  };

  const deleteItem = async (pid: Product["_id"]) => {
    const response = await BrowserRest.delete(
      `/carts/${userCartId}/product/${pid}`,
      {
        headers: {
          Authorization: `Bearer ${session?.user?.token}`,
        },
      }
    );

    return response;
  };

  const getTicket = async () => {
    const response = await BrowserRest.post(
      `/carts/${userCartId}/purchase`,
      {},
      {
        headers: {
          Authorization: `Bearer ${session?.user?.token}`,
        },
      }
    );

    return response.data;
  };

  const paymentIntent = async (total: number) => {
    const response = await BrowserRest.post(
      "/payment/client-payment-intent",
      {
        total,
      },
      {
        headers: {
          Authorization: `Bearer ${session?.user?.token}`,
        },
      }
    );

    return response;
  };

  // useEffect(() => {
  //   async function getCartList() {
  //     const response = await BrowserRest.get(`/carts/${userCartId}`, {
  //       headers: {
  //         Authorization: `Bearer ${session?.user?.token}`,
  //       },
  //     });

  //     return response.data.payload;
  //   }
  //   async function responseCart() {
  //     if (session) {
  //       const cartResponse = await getCartList();

  //       const cartLength = cartResponse.products.length;

  //       setCartQunatity(cartLength);
  //     }
  //   }
  //   responseCart();
  // }, [session, userCartId]);

  const data = {
    getCartList,
    addToCart,
    deleteItem,
    getTicket,
    paymentIntent,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
