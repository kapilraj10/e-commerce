"use client";
import React from "react";
import { headerData } from "../../constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils"; 

const HeaderMenu = () => {
  const pathname = usePathname();

  return (
    <div className="hidden md:inline-flex w-1/3 items-center gap-7 text-sm capitalize font-semibold text-lightColor">
      {headerData?.map((item) => {
        const isActive = pathname === item?.href;

        return (
          <Link
            key={item?.title}
            href={item?.href}
            className={cn(
              "hover:text-shop_light_green hoverEffect relative group",
              isActive && "text-shop_light_green"
            )}
          >
            {item?.title}

            {/* Left underline */}
            <span
              className={cn(
                "absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-shop_light_green hoverEffect group-hover:w-1/2 group-hover:right-0",
                isActive && "w-1/2 right-0"
              )}
            />

            {/* Right underline */}
            <span
              className={cn(
                "absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-shop_light_green hoverEffect group-hover:w-1/2 group-hover:left-0",
                isActive && "w-1/2 left-0"
              )}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default HeaderMenu;
