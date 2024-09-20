"use server";

import { productTypes } from "@/service/types/product";
const url = process.env.APP_URL;

export const getAll = async (): Promise<productTypes[]> => {
  try {
    const res = await fetch(`${url}/all`);
    if (!res.ok) {
      throw new Error(`Error fetching data: ${res.statusText}`);
    }
    return await res.json();
  } catch (error) {
    const message = (error as Error).message;
    throw new Error(message);
  }
};

export const getProductByTitle = async (
  title: string
): Promise<productTypes[]> => {
  try {
    const allProducts = await getAll();

    return allProducts.filter(
      (product) =>
        product.title &&
        product.title.toLowerCase().includes(title.toLowerCase())
    );
  } catch (error) {
    const message = (error as Error).message;
    throw new Error(message);
  }
};
