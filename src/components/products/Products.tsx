import { Product } from "@/interfaces";

type Props = {
  products: Product[];
};

const ProductsComponent: React.FC<Props> = (products) => {
  return (
    <>
      <h1>PRODUCTS</h1>
    </>
  );
};

export default ProductsComponent;
