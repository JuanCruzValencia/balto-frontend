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
      <div className="flex justify-center items-evenly h-[650px] bg-green p-4">
        <Image
          src={product.thumbnail[0]}
          width={100}
          height={100}
          alt={product.title}
          className="object-contain w-full bg-white p-10"
        />
        <div className="flex flex-col items-start justify-center max-w-[700px] gap-8 p-4">
          <h2 className="text-l font-bold self-center">{product.title}</h2>
          <RatingComponent rating={5} />
          <span className="text-m font-bold">$ {product.price}</span>
          <ProductsQuantity initialValue={1} onAdd={onAdd} />
          <div className="flex gap-2">
            <AddToCartButton pid={product._id} />
            <AddToFavButton />
          </div>
          <p className="uppercase text-justify text-s">{product.description}</p>
        </div>
      </div>
    </>
  );
};

export default ProductDetailCard;
