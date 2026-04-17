"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Flashcard as FlashcardType } from "@/types/flashcard";

type Props = {
  card: FlashcardType;
};

export default function Flashcard({ card }: Props) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-full h-64 cursor-pointer perspective"
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div className="absolute w-full h-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl flex items-center justify-center p-6 backface-hidden">
          <p className="text-lg font-medium text-center text-gray-900 dark:text-gray-100">
            {card.question}
          </p>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full bg-green-600 dark:bg-green-700 text-white rounded-2xl shadow-xl flex items-center justify-center p-6 rotate-y-180 backface-hidden">
          <p className="text-lg font-medium text-center">
            {card.answer}
          </p>
        </div>
      </motion.div>
    </div>
  );
}