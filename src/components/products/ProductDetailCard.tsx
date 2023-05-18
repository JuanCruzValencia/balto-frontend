import Image from "next/image";
import { Product } from "@/interfaces";
import {
  AddToCartButton,
  AddToFavButton,
  RatingComponent,
} from "@/components/common";
import ProductsQuantity from "../common/ProductQuantity";

type Props = {
  product: Product;
};

const onAdd = (num: number) => {
  return num;
};

const ProductDetailCard: React.FC<Props> = ({ product }) => {
  return (
    <>
      <div className="flex justify-center items-evenly h-full w-[1000px] bg-white gap-4 border-2 border-footer rounded">
        <Image
          src={product.thumbnail[0]}
          width={100}
          height={100}
          alt={product.title}
          className="max-h-[400px] w-full max-w-[400px] bg-white p-10 self-center border-2"
        />
        <div className="flex flex-col items-start justify-center max-w-[700px] gap-8 p-4 bg-green">
          <h2 className="text-l font-bold self-center">{product.title}</h2>
          <RatingComponent rating={5} />
          <span className="text-m font-bold items-center justify-center">
            $ {product.price}
          </span>
          <div className="flex gap-2">
            <ProductsQuantity initialValue={1} onAdd={onAdd} />
            <AddToCartButton
              pid={product._id}
              className="text-s bg-font w-full rounded text-white p-2 px-4 uppercase shadow-xl font-bold hover:bg-footer"
            />
            <AddToFavButton />
          </div>
          <p className="uppercase text-justify text-s">{product.description}</p>
        </div>
      </div>
    </>
  );
};

export default ProductDetailCard;
