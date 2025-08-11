import React, { FC } from "react";
import Logo from "./Logo";
import { X } from "lucide-react";
import Link from "next/link";
import { headerData } from "../../constants/data";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface HeaderItem {
  title: string;
  href: string;
  icon?: React.ReactNode; // Optional icon for each menu item
}

const SideMenu: FC<SidebarProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className={`
        fixed inset-y-0 left-0 
        min-w-72 max-w-96 
        bg-black h-screen 
        p-6 border-r border-shop_light_green 
        flex flex-col gap-8
        z-50 overflow-y-auto
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
    >
      {/* Header with logo and close button */}
      <div className="flex items-center justify-between">
        <Logo
          className="text-white text-2xl"
          spanDesign="group-hover:text-shop_light_green" 
        />
        <button
          onClick={onClose}
          className="
            p-2 rounded-full
            hover:bg-gray-800 
            hover:text-shop_light_green 
            transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-shop_light_green
          "
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
      
      {/* Navigation Menu */}
      <nav className="flex-1 flex flex-col gap-2">
        {headerData?.map((item: HeaderItem) => (
          <Link
            href={item.href}
            key={item.title}
            className="
              flex items-center gap-4
              px-4 py-3 rounded-lg
              text-white hover:text-shop_light_green 
              hover:bg-gray-800
              transition-all duration-200
              text-lg
            "
            onClick={onClose}
          >
            {item.icon && <span>{item.icon}</span>}
            <span>{item.title}</span>
          </Link>
        ))}
      </nav>

      {/* Optional footer */}
      <div className="mt-auto pt-4 border-t border-gray-800">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} E-COMMERCE
        </p>
      </div>
    </div>
  );
};

export default SideMenu;