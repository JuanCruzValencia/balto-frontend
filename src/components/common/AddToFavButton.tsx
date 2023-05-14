import Link from "next/link";
import { AiFillHeart } from "react-icons/ai";

const AddToFavButton: React.FC = () => {
  return (
    <div className="text-m bg-font rounded text-red font-bold p-2 hover: hover:bg-footer">
      <Link href={`/fav`}>
        <AiFillHeart />
      </Link>
    </div>
  );
};

export default AddToFavButton;
