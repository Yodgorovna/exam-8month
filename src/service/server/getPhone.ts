"use server";

import { productTypes } from "@/service/types/product";
const url = process.env.APP_URL;

export const getPhone = async (): Promise<productTypes[]> => {
  try {
    const res = await fetch(`${url}/phones`);
    if (!res.ok) {
      throw new Error(`Server error: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    const message = (error as Error).message;
    throw new Error(message);
  }
};
