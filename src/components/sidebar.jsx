"use client";
import React from "react";
import { Cart } from "@/components/svg/Cart";
import { Button } from "./ui/button";

export const Sidebar = () => {
  return (
    <div className="container  w-[280px] pt-7 pl-10 bg-white">
      <Button className="w-[211px] flex gap-2 border-r min-h-4">
        <Cart />
        Maxsus buyurtma
      </Button>
    </div>
  );
};
