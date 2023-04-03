import { Product } from "@/interfaces";
import { ServerRest } from "@/utils/backend/server-rest";

export const getAllProducts = async () => {
  const { data } = await ServerRest.get<Product[]>("/products");

  return data;
};

export const getOneProduct = async (pid: string) => {
  const { data } = await ServerRest.get<Product>(`/products/${pid}`);

  return data;
};
