import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <nav className="bg-orange-100 dark:bg-slate-700">
      <div className="max-w-6xl mx-auto py-4 px-6 flex justify-center">
        <NavbarItem title="Trending" param="fetchTrending" />
        <NavbarItem title="Top Rated" param="fetchTopRated" />
      </div>
    </nav>
  );
}
