import Link from "next/link";
import MenuItem from "./MenuItem";

import { TbHome, TbInfoSquareRounded } from "react-icons/tb";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <header className="sticky top-0 left-0 z-10 bg-white dark:bg-slate-800 transition-colors">
      <div className="py-4 px-6 flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex gap-4">
          <MenuItem title="Home" link="/" icon={<TbHome />} />
          <MenuItem
            title="About"
            link="/about"
            icon={<TbInfoSquareRounded />}
          />
        </div>
        <div className="flex items-center gap-4">
          <DarkModeSwitch />
          <Link href="/" className="inline-flex gap-2 items-center">
            <span className="inline-block py-1 px-2 rounded-md text-white font-bold bg-orange-600">
              IMDb
            </span>
            Clone
          </Link>
        </div>
      </div>
    </header>
  );
}
