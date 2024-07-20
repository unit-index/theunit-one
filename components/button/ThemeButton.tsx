import { Link } from "@/navigation";
import { twMerge } from "tailwind-merge";

export default function ThemeButton({
  link,
  title,
  className,
} : {
  link: string,
  title: string,
  className?: string,
}) {
  return (
    <Link 
      href={link}
      className={twMerge("group inline-block px-7 py-3 rounded-full bg-gradient-to-r from-unit-blue to-unit-orange text-sm hover:from-hover-blue/70 hover:to-hover-orange/70", className)}
    >
      <div className="text-white group-hover:text-gradient">{title}</div>
    </Link>
  )
}