import { useCounter } from "@/hooks";

type Props = {
  initialValue: number;
  onAdd: (num: number) => number;
};

const ProductsQuantity: React.FC<Props> = ({ initialValue, onAdd }) => {
  const { counter, handleAddClick, handleSubClick } = useCounter();

  return (
    <>
      <div className="flex gap-2 justify-center items-center rounded bg-font p-1 text-white">
        <span className="font-bold uppercase">Quantity:</span>
        <button
          onClick={handleAddClick}
          className="text-s bg-footer w-[40px] rounded text-font p-2 uppercase shadow-xl font-bold"
        >
          +
        </button>
        <span>{counter}</span>
        <button
          onClick={handleSubClick}
          className="text-s bg-footer w-[40px] rounded text-font p-2 uppercase shadow-xl font-bold"
        >
          -
        </button>
      </div>
    </>
  );
};

export default ProductsQuantity;
