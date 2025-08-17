export type ICannonColumnProps = {
  onShoot: (letter: string) => void;

};
export type Types = {
  words: Word[];
  setWords: React.Dispatch<React.SetStateAction<Word[]>>;
  activeWordId: number | null;
  setActiveWordId: React.Dispatch<React.SetStateAction<number | null>>;
  indexFill:number,
  activeLetter : string | null,
  setActiveLetter:React.Dispatch<React.SetStateAction<string | null>>;
  shootBullet : (letter:string) =>void,
  score:number|null
};

export type Word = {
  id: number;
  text: string;
  x: number;
  y: number;
};

export type Props = {
  existingWords: Word[];            
  onAddWords: (newWords: Word[]) => void; 
};

export type WordItemProps = {
  text: string;
  x: number;
  y: number;
  active: boolean;
};

export type WordListProps = {
  words: Word[];
  activeWordId: number | null;
};

export type OnShoot = (letter: string) => void;

export type AppContextType={
    gameDifficulty:string|"";
    speedGame : number|null
  }

  export type IDiffSpeedGame={
      id: number;
    value: string;
    label: string;
    speed: number;
  }