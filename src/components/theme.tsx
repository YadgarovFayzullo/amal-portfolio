"use client";

import { Icon } from "./icon";

const STORAGE_KEY = "theme";

/**
 * Ставит тему до первой отрисовки, поэтому при загрузке нет вспышки светлого фона.
 */
export const themeScript = `(()=>{try{var s=localStorage.getItem("${STORAGE_KEY}");var d=s?s==="dark":matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.dataset.theme=d?"dark":"light"}catch(e){}})()`;

/** Какая иконка видна, решает CSS, поэтому состояние в React не нужно. */
export function ThemeToggle({ label, className = "" }: { label: string; className?: string }) {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // приватный режим — просто не запоминаем выбор
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      className={`flex size-8 items-center justify-center rounded-[18px] bg-control text-fg transition-opacity hover:opacity-80 ${className}`}
    >
      <Icon name="moon" size={16} className="dark:hidden" />
      <Icon name="sun" size={16} className="hidden dark:block" />
    </button>
  );
}
