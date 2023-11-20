"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface INavbarItemProps {
  title: string;
  param: string;
}

export default function NavbarItem({ title, param }: INavbarItemProps) {
  const genre = useSearchParams().get("g");

  const baseStyle =
    "inline-block p-2 underline underline-offset-8 decoration-2 transition-colors";

  return (
    <Link
      href={"/?g=" + param}
      className={
        genre === param
          ? baseStyle + " decoration-orange-600 text-orange-600"
          : baseStyle + " decoration-orange-100 dark:decoration-slate-700"
      }
    >
      {title}
    </Link>
  );
}
