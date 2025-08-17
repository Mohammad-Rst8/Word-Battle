import{useContext} from "react";
import { Context } from "./CustomProvider";
import { useKeyboardEvents } from "./useKeyboardEvents";
import type { ICannonColumnProps } from "../utils/types";



export const CannonColumn = ({ onShoot }:ICannonColumnProps) => {
const {activeLetter ,score} = useContext(Context)
  
 const { triggerShoot,LETTERS} = useKeyboardEvents(onShoot)
  return (
    <div className="flex items-center justify-center gap-3 px-3 pt-2 font-dirooz pb-1 bg-amber-50 rounded-b-full">
      <div className="bg-white  rounded-3xl px-2 py-1 ">
        <strong className="text-red-600 font-bold">امتیاز: {score}</strong>
      </div>
      {[...LETTERS].reverse().map((letter , index) => {
        const isActive = activeLetter === letter;
        return (
          <button
            key={index}
            onClick={() => triggerShoot(letter)}
            className={`relative z-20 flex w-10 h-10 items-center justify-center rounded-full border-4 shadow-lg transition-transform 
              ${isActive
                ? "scale-90 bg-gray-600 border-gray-500"
                : "bg-gray-800 border-gray-600 hover:scale-105"}`}
          >
            <span
              aria-hidden
              className="absolute top-8 z-0 w-2 h-4 bg-gray-600 rounded-b-sm"
            />
            
            <span className="text-xl font-semibold text-white">{letter}</span>
          </button>
        );
      })}
    </div>
  );
};

export default CannonColumn;
