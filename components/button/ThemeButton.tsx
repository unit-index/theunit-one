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
      className={twMerge("px-7 py-3 rounded-full bg-black text-white text-sm", className)}
    >
      {title}
    </Link>
  )
}