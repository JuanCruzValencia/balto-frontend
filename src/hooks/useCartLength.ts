import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { BrowserRest } from "@/utils/frontend/browser-rest";

const useCartLength = () => {
  const [totalCart, setTotalCart] = useState<number>(0);
  const { data: session } = useSession();

  useEffect(() => {
    const fetchCart = async () => {
      if (session) {
        const response = await BrowserRest.get(`/carts/${session.user?.cart}`, {
          headers: {
            Authorization: `Bearer ${session.user?.token}`,
          },
        });

        const cartLength = response.data.payload.products.length;

        setTotalCart(cartLength);
      }
    };

    fetchCart();
  });

  return { totalCart };
};

export default useCartLength;
