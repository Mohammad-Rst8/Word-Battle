
import  { useContext } from "react";
import { Context } from "../components/CustomProvider";
import type { WordItemProps } from "../utils/types";
import { AppContext } from "../App";


export const WordItem = ({ text, x, y, active }:WordItemProps) => {
  const {indexFill,} = useContext(Context)
  const {gameDifficulty} = useContext(AppContext)

  
  return (
    <>
    <div
      style={{
        position: "absolute",
        left: x,
        bottom: y,
        backgroundColor: active ? "gold" : "gray",
        padding: "6px 12px",
        borderRadius: 8,
        color: active ? "black" : "white",
        fontWeight: "bold",
        userSelect: "none",
        fontSize: 18,
        boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
      }}
    >
      {text.split("").map((char , index) =>(
        <span key={index} className={` ${gameDifficulty === "hard" ? "font-ziba text-2ahkiشxl tracking-wider" : "font-dirooz"} ${ active && (index <= indexFill) ? "text-red-400":""}`}>
          {char}
        </span>
      ))}
    </div>
    </>
  );
};
