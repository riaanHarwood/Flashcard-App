"use client";

import FlashcardContainer from "@/components/flashcard/FlashcardContainer";
import Navbar from "@/components/ui/Navbar";
import { useFlashcards } from "@/hooks/useFlashcards";


export default function Home() {
  const flashcardState = useFlashcards();
  const { reset, ...flashcardProps } = flashcardState;

  return (
    <main className="min-h-screen bg-neutral-100 dark:bg-neutral-900 text-gray-900 dark:text-gray-100 transition">
      
      {/* Navbar */}
      <Navbar onReset={reset} />

      {/* Content */}
      <div className="flex items-center justify-center">
        <FlashcardContainer {...flashcardProps} />
      </div>
    </main>
  );
}