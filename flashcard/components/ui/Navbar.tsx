"use client";

import { useState } from "react";

export default function Navbar({ onReset }: { onReset: () => void }) {
  const [open, setOpen] = useState(false);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    console.log("Dark mode toggled", document.documentElement.classList.contains("dark"));
  };

  return (
    <div className="w-full flex items-center justify-between px-6 py-4">
      {/* Title */}
      <h1 className="text-4xl font-semibold text-gray-900 dark:text-gray-100">Flashcard</h1>

      {/* Settings */}
      <div
        className="relative"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <button
          className="p-2 text-2xl rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          ⚙️
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-2">
            <button
              onClick={toggleDarkMode}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100"
            >
              Dark Mode
            </button>

            <button
              onClick={onReset}
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