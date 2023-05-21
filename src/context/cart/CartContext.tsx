import { CartContextProps, Product } from "@/interfaces";
import { BrowserRest } from "@/utils/frontend/browser-rest";
import { createContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";

export const CartContext = createContext<CartContextProps | {}>({});

type Props = {
  children: React.ReactNode;
};

export const CartProvider: React.FC<Props> = ({ children }) => {
  const { data: session } = useSession();
  const [cartCount, setCartCount] = useState<number>(0);
  const userCartId = session?.user?.cart;
  const token = session?.user?.token;

  useEffect(() => {
    const fetchCart = async () => {
      const response = await BrowserRest.get(`/carts/${userCartId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const cart = response.data.payload.products;

      setCartCount(cart.length);
    };

    fetchCart();
  }, [userCartId, token, setCartCount]);

  const addToCart = async (pid: Product["_id"]) => {
    try {
      const response = await BrowserRest.post(
        `/carts/${userCartId}/product/${pid}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setCartCount(cartCount + 1);

      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const deleteItem = async (pid: Product["_id"]) => {
    const response = await BrowserRest.delete(
      `/carts/${userCartId}/product/${pid}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setCartCount(cartCount - 1);

    return response;
  };

  const getTicket = async () => {
    const response = await BrowserRest.post(
      `/carts/${userCartId}/purchase`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
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
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response;
  };

  const clearCart = async () => {
    const response = await BrowserRest.delete(`/carts/${userCartId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  };

  const data = {
    cartCount,
    addToCart,
    deleteItem,
    getTicket,
    paymentIntent,
    clearCart,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
