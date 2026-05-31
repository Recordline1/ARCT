"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-10 h-10" />; // Заглушка

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-700 hover:scale-110 transition-transform cursor-pointer"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}