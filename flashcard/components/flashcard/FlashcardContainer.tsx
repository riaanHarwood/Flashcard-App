"use client";

import { motion, AnimatePresence } from "framer-motion";
import Flashcard from "./Flashcard";
import { Flashcard as FlashcardType } from "@/types/flashcard";

interface FlashcardContainerProps {
  currentCard: FlashcardType;
  currentIndex: number;
  total: number;
  next: () => void;
  prev: () => void;
}

export default function FlashcardContainer({
  currentCard,
  currentIndex,
  total,
  next,
  prev,
}: FlashcardContainerProps) {

  return (
    <div className="w-full max-w-xl flex flex-col items-center gap-6">
      
      {/* Progress */}
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {currentIndex + 1} / {total}
      </p>

      {/* Card */}
      <div className="relative w-full h-64">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCard.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="absolute w-full"
          >
            <Flashcard card={currentCard} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-6">
        <button
          onClick={prev}
          className="px-4 py-2 rounded-xl bg-white dark:bg-gray-800 shadow hover:shadow-md transition text-gray-900 dark:text-gray-100"
        >
          ←
        </button>

        <button
          onClick={next}
          className="px-4 py-2 rounded-xl bg-white dark:bg-gray-800 shadow hover:shadow-md transition text-gray-900 dark:text-gray-100"
        >
          →
        </button>
      </div>
    </div>
  );
}