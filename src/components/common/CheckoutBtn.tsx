import { Cart } from "@/interfaces";
import Link from "next/link";

type Props = {
  cartId: Cart["_id"];
};

const CheckoutBtn: React.FC<Props> = ({ cartId }) => {
  return (
    <Link href={`/carts/${cartId}/payment`} className="w-full max-w-[200px]">
      <button className="text-s bg-font w-full rounded text-white p-2 uppercase shadow-xl font-bold hover:bg-footer">
        checkout
      </button>
    </Link>
  );
};

export default CheckoutBtn;
