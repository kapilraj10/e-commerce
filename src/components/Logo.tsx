import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  spanDesign?: string; 
}

const Logo = ({ className, spanDesign }: LogoProps) => {
  return (
    <Link href="/" className="group">
      <h2
        className={cn(
          "text-2xl text-shop_orange font-black tracking-wider uppercase font-poppins hover:opacity-80 transition",
          className
        )}
      >
        E-commerc
        <span
          className={cn(
            "text-shop_light_green group-hover:text-shop_orange transition",
            spanDesign
          )}
        >
          e
        </span>
      </h2>
    </Link>
  );
};

export default Logo;
