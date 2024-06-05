import { Link } from "@/navigation";

export default function ThemeButton({
  link,
  title,
} : {
  link: string,
  title: string,
}) {
  return (
    <Link 
      href={link}
      className="px-4 py-3 rounded-full bg-black text-white text-sm"
    >
      {title}
    </Link>
  )
}