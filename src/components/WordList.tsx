
import { WordItem } from "./WordItem";
import type { WordListProps} from "../utils/types"; 

export const WordList= ({ words, activeWordId }:WordListProps) => {

  return (
    <>
      {words.map((word) => (
        <WordItem
          key={word.id}
          text={word.text}
          x={word.x}
          y={word.y}
          active={word.id === activeWordId}
        />
      ))}
    </>
  );
};
