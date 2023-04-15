import { Product } from "@/interfaces";
import ProductHomeCard from "./ProductHomeCard";

type Props = {
  products: Product[];
};

const ProductsFlexComponent: React.FC<Props> = ({ products }) => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-7 max-w-[80vw]">
        {products.map((product) => (
          <ProductHomeCard product={product} key={product._id} />
        ))}
      </div>
    </>
  );
};

export default ProductsFlexComponent;
