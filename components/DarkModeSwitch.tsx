"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { TbSun, TbMoon } from "react-icons/tb";

export default function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return undefined;

  if (currentTheme === "dark")
    return (
      <button className="text-xl" onClick={() => setTheme("light")}>
        <TbSun />
      </button>
    );

  return (
    <button className="text-xl" onClick={() => setTheme("dark")}>
      <TbMoon />
    </button>
  );
}
