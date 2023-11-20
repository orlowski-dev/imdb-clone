"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const { push } = useRouter();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!search || search.length < 3) return;

    push("/search/" + search);
  };

  return (
    <div className="max-w-6xl mx-auto py-4 px-6 mt-4">
      <form
        onSubmit={handleFormSubmit}
        className="flex items-center justify-between gap-4"
      >
        <input
          type="text"
          placeholder="Enter keywords.."
          name="movie-title"
          defaultValue={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
          className="bg-white dark:bg-slate-800 outline-none w-full p-2 border-b-2 border-b-white dark:border-b-slate-800 transition-colors focus:border-b-orange-600"
        />
        <button
          disabled={!search || search.length < 3}
          className="border-b-2 border-b-white dark:border-b-slate-800 hover:border-b-orange-600 p-2 transition-colors disabled:hover:border-b-gray-500"
        >
          Search
        </button>
      </form>
    </div>
  );
}
