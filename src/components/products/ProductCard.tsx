import { Product } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

type Props = {
  product: Product;
};

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="flex bg-white h-full max-h-[200px] w-full max-w-[470px]">
      <Image
        src={product.thumbnail[0]}
        width={100}
        height={100}
        alt={product.title}
        className="w-full object-contain"
      />
      <div className="flex flex-col justify-evenly h-full w-full p-4">
        <h4>{product.title.slice(0, 20)}...</h4>
        <span>$ {product.price}</span>
        <Link href={`/products/${product._id}`} className="self-center">
          <button className="border-2 border-black py-2 px-6">Discover</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
