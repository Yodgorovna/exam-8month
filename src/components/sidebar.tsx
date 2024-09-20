import React from "react";
import { Cart } from "@/components/svg/Cart";
import { Button } from "./ui/button";
import { getCategory } from "@/service/server/getCategory";
import Link from "next/link";

export async function Sidebar() {
  const data = await getCategory();
  return (
    <div className="container justify-start w-[280px] pt-7 pl-10 bg-white text-secondary shadow-md">
      <Button className="w-[211px] flex gap-2 border-r min-h-4">
        <Cart />
        Maxsus buyurtma
      </Button>
      <div className="flex flex-col text-left gap-2 my-[10px]">
        {data.map((category) => (
          <>
            <Link key={category.id} href={`/category-list/${category.name}`}>
              <div className="py-[13px]">
                <strong className="text-secondary  hover:text-primary cursor-pointer">
                  {category.text}
                </strong>
              </div>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
}
