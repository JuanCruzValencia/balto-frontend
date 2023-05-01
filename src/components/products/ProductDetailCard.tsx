import Image from "next/image";
import { Product } from "@/interfaces";
import ProductsQuantity from "@/components/common/ProductQuantity";
import {
  AddToCartButton,
  AddToFavButton,
  RatingComponent,
} from "@/components/common";

type Props = {
  product: Product;
};

const onAdd = (num: number) => {
  return num;
};

const ProductDetailCard: React.FC<Props> = ({ product }) => {
  return (
    <>
      <h1>Detailed product</h1>
      <div className="flex justify-center items-center h-[850px] bg-green">
        <Image
          src={product.thumbnail[0]}
          width={100}
          height={100}
          alt={product.title}
          className="object-cover h-full w-full p-7"
        />
        <div className="flex flex-col items-start justify-evenly max-w-[730px]">
          <h2 className="text-l font-bold">{product.title}</h2>
          <RatingComponent rating={5} />
          <span className="text-m font-bold">$ {product.price}</span>
          <ProductsQuantity initialValue={1} onAdd={onAdd} />
          <div>
            <AddToCartButton pid={product._id} />
            <AddToFavButton />
          </div>
          <p>{product.description}</p>
        </div>
      </div>
    </>
  );
};

export default ProductDetailCard;
