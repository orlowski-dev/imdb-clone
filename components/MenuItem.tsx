import Link from "next/link";

interface IMenuItemProps {
  title: string;
  link: string;
  icon: React.ReactElement;
}

export default function MenuItem({ title, link, icon }: IMenuItemProps) {
  return (
    <Link href={link} className="hover:text-orange-600 transition-colors">
      <span className="hidden md:inline uppercase font-medium">{title}</span>
      <span className="md:hidden text-2xl">{icon}</span>
    </Link>
  );
}
