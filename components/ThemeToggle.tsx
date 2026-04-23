"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
    setMounted(true);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    const root = document.documentElement;
    if (next === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  if (!mounted) {
    return (
      <span
        aria-hidden
        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-ink-200 bg-white"
      />
    );
  }

  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "التحويل للوضع الفاتح" : "التحويل للوضع الداكن"}
      title={isDark ? "وضع فاتح" : "وضع داكن"}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-ink-200 bg-white text-ink-600 transition hover:border-brand-200 hover:bg-brand-50 hover:text-brand-500 dark:border-ink-700 dark:bg-ink-800 dark:text-ink-200 dark:hover:border-accent-500 dark:hover:text-accent-500"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
