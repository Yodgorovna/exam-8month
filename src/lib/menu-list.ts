import { SquareArrowLeft, LucideIcon } from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon;
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/smartfon",
          label: "Smartfon",
          active: pathname.includes("/smartfon"),
          icon: SquareArrowLeft,
          submenus: [],
        },
        {
          href: "/smartfon",
          label: "Smartfon",
          active: pathname.includes("/smartfon"),
          icon: SquareArrowLeft,
          submenus: [],
        },
        {
          href: "/smartfon",
          label: "Smartfon",
          active: pathname.includes("/smartfon"),
          icon: SquareArrowLeft,
          submenus: [],
        },
        {
          href: "/smartfon",
          label: "Smartfon",
          active: pathname.includes("/smartfon"),
          icon: SquareArrowLeft,
          submenus: [],
        },
        {
          href: "/smartfon",
          label: "Smartfon",
          active: pathname.includes("/smartfon"),
          icon: SquareArrowLeft,
          submenus: [],
        },
        {
          href: "/smartfon",
          label: "Smartfon",
          active: pathname.includes("/smartfon"),
          icon: SquareArrowLeft,
          submenus: [],
        },
        {
          href: "/smartfonlar",
          label: "Smartfonlar",
          active: pathname.includes("/smartfon"),
          icon: SquareArrowLeft,
          submenus: [],
        },
        {
          href: "/smartfonlar",
          label: "Smartfonlar",
          active: pathname.includes("/smartfon"),
          icon: SquareArrowLeft,
          submenus: [
            {
              href: "/posts",
              label: "All Posts",
              active: pathname === "/posts",
            },
            {
              href: "/posts/new",
              label: "New Post",
              active: pathname === "/posts/new",
            },
          ],
        },
      ],
    },
  ];
}
