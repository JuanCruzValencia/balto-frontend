import { useCounter } from "@/hooks";

type Props = {
  initialValue: number;
  onAdd: (num: number) => number;
};

const ProductsQuantity: React.FC<Props> = ({ initialValue, onAdd }) => {
  const { counter, handleAddClick, handleSubClick } = useCounter();

  return (
    <>
      <div className="flex gap-2 justify-center items-center">
        <span>Quantity:</span>
        <button onClick={handleAddClick}>+</button>
        <span>{counter}</span>
        <button onClick={handleSubClick}>-</button>
      </div>
    </>
  );
};

export default ProductsQuantity;
