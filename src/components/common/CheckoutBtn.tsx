import Link from "next/link";

const CheckoutBtn: React.FC = () => {
  return (
    <Link href={"/cart/payment"} className="w-full max-w-[200px]">
      <button className="text-s bg-font w-full rounded text-white p-2 uppercase shadow-xl font-bold">
        checkout
      </button>
    </Link>
  );
};

export default CheckoutBtn;
