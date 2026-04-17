"use client";

import Button from "@/components/ui/Button";

interface Props {
  onNext: () => void;
  onPrev: () => void;
}

export default function FlashcardControls({ onNext, onPrev }: Props) {
  return (
    <div className="flex gap-4">
      <Button onClick={onPrev}>Previous</Button>
      <Button onClick={onNext}>Next</Button>
    </div>
  );
}
