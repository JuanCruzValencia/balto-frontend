import { Product } from "@/interfaces";
import ProductCard from "./ProductCard";

type Props = {
  products: Product[];
};

const ProductsComponent: React.FC<Props> = ({ products }) => {
  return (
    <>
      <h1>PRODUCTS</h1>
      {products.map((product) => (
        <ProductCard product={product} key={product._id} />
      ))}
    </>
  );
};

export default ProductsComponent;
