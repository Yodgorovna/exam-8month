import { getCategory } from "@/service/server/getCategory";
import Link from "next/link";
import React from "react";

export const Categories = async () => {
  const data = await getCategory();

  return (
    <div className="flex mt-[100px] sm:mt-0  lg:mt-[23px] flex-col bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md overflow-hidden">
      <div className="flex flex-col p-4  gap-2 h-[330px] sm:h-[300px] lg:h-[1600px]">
        {data.map((category) => (
          <Link key={category.id} href={`/category-list/${category.name}`}>
            <div className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors duration-300 ease-in-out">
              <strong className="text-gray-800 dark:text-gray-200 hover:text-[#1FBA4A] cursor-pointer hover:underline">
                {category.name}
              </strong>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
