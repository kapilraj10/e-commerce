import { Heart } from "lucide-react";
import Link from "next/link";
import React from "react";

const FavoriteButton = () => {
  return (
    <Link href={"/wishlist"} className="group relative">
      <Heart className="w-5 h-5 group-hover:text-shop_light_green" />
      <span className="absolute -top-1 -right-1 bg-shop_orange text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
        0
      </span>
    </Link>
  );
};

export default FavoriteButton;