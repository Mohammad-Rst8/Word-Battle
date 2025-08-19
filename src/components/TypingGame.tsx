import { useEffect, useRef, useState } from "react";
import { WordList } from ".//WordList";
import { WordGenerator } from "./WordGenerator";
import { useContext } from "react";
import { Context } from "../components/CustomProvider";
import type { Word } from "./../utils/types";
import GameOverModal from "./GameOverModal";

const TypingGame = () => {
  const { words, setWords, activeWordId, setActiveWordId } =
    useContext(Context);
  const [gameState, setGameState] = useState("run");
  const animationIdRef = useRef<number | null>(null);
  const addWords = (newWords: Word[]) => {
    setWords((prevWords) => {
      const updated = [...prevWords, ...newWords];

      setActiveWordId((prevActive) => {
        if (!prevActive && updated.length > 0) {
          return updated[0].id;
        }
        return prevActive;
      });

      return updated;
    });
  };

  useEffect(() => {
    const moveWords = () => {
      setWords((prevWords) => {
        const updated = prevWords.map((word) => ({ ...word, y: word.y + 2 }));

        if (updated.some((word) => word.y > window.innerHeight - 80)) {
          console.log("Game Over");

          if (animationIdRef.current !== null) {
            setGameState("lose");
            cancelAnimationFrame(animationIdRef.current);
          }
          return prevWords;
        }

        return updated;
      });

      animationIdRef.current = requestAnimationFrame(moveWords);
    };

    animationIdRef.current = requestAnimationFrame(moveWords);

    return () => {
      if (animationIdRef.current !== null) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, []);

  return (
    <>
      {gameState == "lose" &&
        <GameOverModal />
       }
      
          <WordGenerator existingWords={words} onAddWords={addWords} />
          <WordList words={words} activeWordId={activeWordId} />
        
      
    </>
  );
};

export default TypingGame;
