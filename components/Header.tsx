import Link from "next/link";
import MenuItem from "./MenuItem";

import { TbHome, TbInfoSquareRounded } from "react-icons/tb";

export default function Header() {
  return (
    <header className="py-4 px-6 flex justify-between items-center max-w-6xl mx-auto">
      <div className="flex gap-4">
        <MenuItem title="Home" link="/" icon={<TbHome />} />
        <MenuItem title="About" link="/about" icon={<TbInfoSquareRounded />} />
      </div>
      <div>
        <Link href="/">
          <span className="inline-block py-1 px-2 rounded-md text-white font-bold bg-orange-600">
            IMDb
          </span>{" "}
          Clone
        </Link>
      </div>
    </header>
  );
}
