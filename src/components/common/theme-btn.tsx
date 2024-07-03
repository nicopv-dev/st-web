"use client";

import { useThemeStore } from "@/zustand/theme-store";
import { useEffect } from "react";

export default function ThemeButton() {
  const { theme, setTheme } = useThemeStore();

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [theme]);

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      theme
    </button>
  );
}
