import CheckoutBtn from "../common/CheckoutBtn";

const CartOrderDetail: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-5 w-full border-t-2 border-font">
      <span className="text-m">Total cost:</span>
      <span className="font-bold text-l mb-5">$total</span>
      <CheckoutBtn />
    </div>
  );
};

export default CartOrderDetail;
