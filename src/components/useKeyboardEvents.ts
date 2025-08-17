import { useCallback, useContext, useEffect } from "react";
import { Context } from "./CustomProvider";
import type { OnShoot } from "../utils/types";
const LETTERS:string[] = [
  "ا", "ب", "پ", "ت", "ث", "ج", "چ", "ح", "خ",
  "د", "ذ", "ر", "ز", "ژ", "س", "ش", "ص", "ض",
  "ط", "ظ", "ع", "غ", "ف", "ق", "ک", "گ", "ل",
  "م", "ن", "و", "ه", "ی",
];

export function useKeyboardEvents(onShoot: OnShoot) {

  const { setActiveLetter } = useContext(Context);

  const triggerShoot = useCallback(
    (letter: string) => {
      onShoot(letter);
      setActiveLetter(letter);
      setTimeout(() => setActiveLetter(null), 150);
    },
    [onShoot, setActiveLetter] 
  );


  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (`Key${e.key.toUpperCase()}` === e.code) {
        alert("کیبوردتون رو فارسی کنید");
      }
      const pressedKey = e.key;

      if (LETTERS.includes(pressedKey)) {
        triggerShoot(pressedKey);
      }
    },
    [triggerShoot]
  );


  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return { triggerShoot, handleKeyDown ,LETTERS};
}
