"use server";

const url = process.env.APP_URL;
import { productTypes } from "../types/product";

const getCategory = async (): Promise<productTypes[]> => {
  try {
    const res = await fetch(`${url}/catalog`);
    if (!res.ok) {
      throw new Error("Failed to fetch catalog");
    }
    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const getProductById = async (id: string): Promise<productTypes> => {
  try {
    const endpoints = [
      `/phones/${id}`,
      `/notebook/${id}`,
      `/washingM/${id}`,
      `/steeringWheel/${id}`,
      `/sport/${id}`,
      `/computers/${id}`,
      `/all/${id}`,
    ];

    for (const endpoint of endpoints) {
      const res = await fetch(`${url}${endpoint}`);
      if (res.ok) {
        const data = await res.json();
        return data;
      }
    }

    throw new Error(`Product with ID ${id} not found in any endpoint.`);
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
export { getCategory };
