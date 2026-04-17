"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
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
  const [showCompletion, setShowCompletion] = useState(false);

  useEffect(() => {
    if (currentIndex + 1 === total) {
      setShowCompletion(true);
      // Reset after animation
      const timer = setTimeout(() => setShowCompletion(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, total]);

  // Generate glitter particles
  const glitterParticles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: (Math.random() - 0.5) * 600,
    y: (Math.random() - 0.5) * 600,
    delay: Math.random() * 0.5,
    color: ['#FFD700', '#FFA500', '#FF69B4', '#00FF00', '#FF0000', '#0000FF', '#FF1493', '#32CD32'][Math.floor(Math.random() * 8)]
  }));

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

        {/* Completion Glitter Animation */}
        <AnimatePresence>
          {showCompletion && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 pointer-events-none"
            >
              {glitterParticles.map((particle) => (
                <motion.div
                  key={particle.id}
                  initial={{
                    x: 0,
                    y: 0,
                    scale: 0,
                    opacity: 1
                  }}
                  animate={{
                    x: particle.x,
                    y: particle.y,
                    scale: [0, 1, 0],
                    opacity: [1, 1, 0]
                  }}
                  transition={{
                    duration: 2,
                    delay: particle.delay,
                    ease: "easeOut"
                  }}
                  className="absolute w-2 h-2 rounded-full"
                  style={{ backgroundColor: particle.color }}
                />
              ))}
            </motion.div>
          )}
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

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className="bg-green-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / total) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}