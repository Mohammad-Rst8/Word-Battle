import {createContext, useContext, useState } from "react";
import type { Types, Word } from "../utils/types";
import { AppContext } from "../App";
export const Context = createContext<Types>({
  words: [],
  setWords: () => {},
  activeWordId: null,
  setActiveWordId: () => {},
  setActiveLetter: () => {},
  indexFill: -1,
  activeLetter: null,
  shootBullet : () => {},
  score:0
});
export const CustomProvider = ({children}: {children: React.ReactNode}) => {
  const {gameDifficulty} = useContext(AppContext)
  const [words, setWords] = useState<Word[]>([]);
  const [activeWordId, setActiveWordId] = useState<number | null>(null);
  const [indexFill, setIndexFill] = useState<number>(-1);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [activeLetter, setActiveLetter] = useState<string | null>(null);
  const[score , setScore] = useState(0)
   const shootBullet = (letter: string) => {
    const activeWord = words.find((word) => word.id === activeWordId);
    const wordArray = activeWord?.text.split("");
      if(wordArray && wordArray[activeIndex] !== letter){
        setScore(prev => gameDifficulty === "hard" ? prev - 1 : prev - 3)
       }
 
    if (wordArray && wordArray[activeIndex] === letter) {
      setIndexFill(activeIndex);

      if (activeIndex + 1 === activeWord?.text.length) {
        setScore(prev => gameDifficulty === "hard" ? prev + 10 : prev + 5)
        setWords((prevWords) => {
          const newArr = prevWords.slice(1);
          if (newArr.length > 0) {
            setActiveWordId(newArr[0].id);
          } else {
            setActiveWordId(null);
          }
          setIndexFill(-1);
          return newArr;
        });

        setActiveIndex(0);
      } else {
        setActiveIndex((prev) => prev + 1);
      }
    }
  };
return(
    <Context.Provider value={{
        words,
        setWords,
        activeWordId,
        setActiveWordId,
        indexFill,
        activeLetter,
        setActiveLetter,
        shootBullet,
        score,
      }}>
        {children}
    </Context.Provider>
)
}


export default CustomProvider