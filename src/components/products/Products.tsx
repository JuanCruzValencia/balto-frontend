import { Product } from "@/interfaces";
import ProductCard from "./ProductCard";

type Props = {
  products: Product[];
};

const ProductsComponent: React.FC<Props> = ({ products }) => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-7">
        {products.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    </>
  );
};

export default ProductsComponent;
