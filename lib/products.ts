import type { Product } from "@/types/products";
import products from "@/data/products.json";

export async function getAllProducts(): Promise<Product[]> {
  return products;
}

export async function getProductByName(
  name: string
): Promise<Product | undefined> {
  return products.find((product) => product.identifier === name);
}
