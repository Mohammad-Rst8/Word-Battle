import { useContext, useEffect, useRef } from "react";
import type { Word } from "./../utils/types";
import type { Props } from "./../utils/types";
import { AppContext } from "../App";
import {hardWords, easyWords,mediumWords} from "./../data/WordData"



export const WordGenerator = ({ existingWords, onAddWords }:Props) => {
  const wordsRef = useRef(existingWords);
    const {gameDifficulty,speedGame} = useContext(AppContext)
    const WORDS = gameDifficulty === "Easy" ? easyWords : gameDifficulty === "medium" ? mediumWords :hardWords
  
  useEffect(() => {
    wordsRef.current = existingWords;
  }, [existingWords]);

  useEffect(() => {
    const interval = setInterval(() => {
      const maxWidth = window.innerWidth - 100;
      const occupiedX = wordsRef.current.map(w => w.x);
      const newWord: Word = {
        id: Date.now(),
        text: WORDS[Math.floor(Math.random() * WORDS.length)],
        x: getRandomX(maxWidth, occupiedX),
        y: Math.random() * 50,
      };
      onAddWords([newWord]); 
      
     
    }, speedGame || 1000);
      
    return () => clearInterval(interval);
  }, []);
    
  return null;
};


function getRandomX(maxWidth: number, occupied: number[]) {
  for (let tries = 0; tries < 20; tries++) {
    const x = Math.random() * maxWidth;
     if (occupied.some(pos => Math.abs(pos - x) > 100)) { 
      return x;
    }
  }
  return Math.random()* maxWidth; 
}
