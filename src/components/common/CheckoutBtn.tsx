import { useSession } from "next-auth/react";
import Link from "next/link";

const CheckoutBtn: React.FC = () => {
  const { data: session } = useSession();

  return (
    <Link href={`/carts/testForm`} className="w-full max-w-[200px]">
      <button className="text-s bg-font w-full rounded text-white p-2 uppercase shadow-xl font-bold">
        checkout
      </button>
    </Link>
  );
};

export default CheckoutBtn;