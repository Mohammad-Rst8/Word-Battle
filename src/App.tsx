import { useState } from "react";
import "./App.css";
import Game from "./Game";
import { createContext } from "react";
import type { AppContextType, IDiffSpeedGame } from "./utils/types";
export const AppContext = createContext<AppContextType>({
  gameDifficulty: "",
  speedGame: null,
});
function App() {
  const DifficultyOpt = [
    { id: 1, value: "Easy", label: "آسان", speed: 1700 },
    { id: 2, value: "medium", label: "متوسط", speed: 1200 },
    { id: 3, value: "hard", label: "سخت", speed: 700 },
  ];
  const [showGame, setShowGame] = useState(false);
  const [gameDifficulty, setGameDifficulty] = useState("");
  const [speedGame, setSpeedGame] = useState<number | null>(null);

  function changeDiffSpeedGame(item: IDiffSpeedGame) {
    setGameDifficulty(item.value);
    setSpeedGame(item.speed);
  }
  return (
    <AppContext.Provider value={{ gameDifficulty, speedGame }}>
      <div>
        {showGame ? (
          <Game />
        ) : (
          <div className="flex h-screen font-dirooz">
            <div className="w-1/2 flex items-center justify-center p-4">
              <img
                src="/key.png"
                alt="Hero"
                className="max-h-[80%] w-full object-contain drop-shadow-lg"
              />
            </div>

            <div className="w-1/2 flex flex-col items-center justify-center text-center p-8">
              <h1 className="text-5xl font-bold text-amber-800 mb-6 tracking-wide">
                نبرد کلمات
              </h1>
              <p className="text-base text-amber-700 mb-8 max-w-md">
                !با تایپ سریع و دقیق، دشمنان را شکست بده و مراحل بازی را فتح کن
              </p>
              <div className="flex items-center justify-center gap-3 my-3">
                {DifficultyOpt.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`
                 px-4 py-2 rounded-lg font-medium cursor-pointer transition-all duration-200
                  ${
                    gameDifficulty === item.value
                      ? "bg-indigo-600  text-white shadow-lg scale-105"
                      : "bg-gray-700 text-gray-200 hover:bg-gray-600 hover:shadow-md"
                  }
                `}
                    onClick={() => changeDiffSpeedGame(item)}
                  >
                    {item.label}
                  </button>
                ))}
                <p className="text-lg font-bold text-blue-700 text-center">
                  درجه سختی بازی را مشخص کنید
                </p>
              </div>

              <button
                onClick={() => {
                  setShowGame(true);
                }}
                className="px-8 py-3 bg-amber-700 cursor-pointer text-white text-xl font-semibold rounded-xl shadow-lg hover:bg-amber-800 transition-colors duration-200"
              >
                شروع بازی
              </button>
            </div>
          </div>
        )}
      </div>
    </AppContext.Provider>
  );
}
export default App;
