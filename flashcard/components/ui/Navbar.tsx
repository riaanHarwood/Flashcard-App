"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

export default function Navbar({ onReset }: { onReset: () => void }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    console.log("Toggling theme from", resolvedTheme, "to", newTheme);
    setTheme(newTheme);
    setOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (open && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [open]);

  return (
    <div className="w-full flex items-center justify-between px-6 py-4">
      {/* Title */}
      <h1 className="text-4xl font-semibold text-gray-900 dark:text-gray-100">Flashcard</h1>

      {/* Settings */}
      <div className="relative" ref={menuRef}>
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="p-2 text-3xl rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          ☰
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100"
            >
              Theme
            </button>

            <button
              type="button"
              onClick={() => {
                onReset();
                setOpen(false);
              }}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100"
            >
              Reset Cards
            </button>
          </div>
        )}
      </div>
    </div>
  );
}