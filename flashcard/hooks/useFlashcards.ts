import { useState } from "react";
import { flashcards } from "@/data/flashcards";

export function useFlashcards() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % flashcards.length);
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? flashcards.length - 1 : prev - 1
    );
  };

  const reset = () => {
    setCurrentIndex(0);
  };

  return {
    currentCard: flashcards[currentIndex],
    currentIndex,
    total: flashcards.length,
    next,
    prev,
    reset,
  };
}


