"use server";

import { productTypes } from "@/service/types/product";
const url = process.env.APP_URL;

export const getBrand = async (): Promise<productTypes[]> => {
  try {
    const res = await fetch(`${url}/brand`);
    const data = await res.json();
    return data;
  } catch (error) {
    const message = (error as Error).message;
    throw new Error(message);
  }
};
