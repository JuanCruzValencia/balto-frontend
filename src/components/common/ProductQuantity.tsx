import { useCounter } from "@/hooks";

type Props = {
  initialValue: number;
  onAdd: (num: number) => number;
};

const ProductsQuantity: React.FC<Props> = ({ initialValue, onAdd }) => {
  const { counter, handleAddClick, handleSubClick } = useCounter();

  return (
    <>
      <div className="flex gap-2 justify-center items-center rounded bg-font px-4 p-2 text-white">
        <button
          onClick={handleAddClick}
          className="text-m w-[40px] rounded text-white uppercase shadow-xl font-bold"
        >
          +
        </button>
        <span>{counter}</span>
        <button
          onClick={handleSubClick}
          className="text-m w-[40px] rounded text-white uppercase shadow-xl font-bold"
        >
          -
        </button>
      </div>
    </>
  );
};

export default ProductsQuantity;
