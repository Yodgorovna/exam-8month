"use client";

import * as React from "react";
import { Logo } from "@/components/svg/Logo";
import { Button } from "./ui/button";
import { Filter } from "@/components/svg/Filter";
import { Input } from "./ui/input";
import { SearchIcon } from "@/components/svg/SearchIcon";
import { Bell } from "lucide-react";
import { CircleUserRound } from "@/components/svg/CircleUserRound";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Header = () => {
  return (
    <div className="container py-[23px] bg-white">
      <div className="flex gap-6 items-center">
        <Logo />
        <div className="flex ml-[8px] items-center w-[930px] relative border border-primary pl-2 rounded-md bg-transparent">
          <SearchIcon className="absolute top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input type="search" placeholder="Qidirish" />
          <Button className="rounded-none">
            <Filter />
            Filter
          </Button>
        </div>
        <div>
          <Select>
            <SelectTrigger className="w-[90px] text-primary">
              <SelectValue placeholder="UZ" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Language</SelectLabel>
                <SelectItem value="uz">UZ</SelectItem>
                <SelectItem value="ru">RU</SelectItem>
                <SelectItem value="eng">ENG</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <Bell className="text-black" />
        <div className="flex text-black gap-3">
          Kirish
          <CircleUserRound className="text-white bg-black rounded-full" />
        </div>
      </div>
    </div>
  );
};
