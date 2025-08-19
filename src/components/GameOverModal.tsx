import React, { useEffect } from "react";

// type GameOverModalProps = {
//   score: number;
//   onRestart: () => void;
//   onClose: () => void;
// };

function GameOverModal() {

  // اگر بیرون از مدال کلیک بشه → بره به "/"
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === "overlay") {
      window.location.href = "/"; // تغییر مسیر بدون react-router
    }
  };
  const restartHandler = () =>{
     window.location.href = "/";
  }

  // ESC برای بستن
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        window.location.href = "/";
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div
      id="overlay"
      onClick={handleOutsideClick}
      className="absolute inset-0 z-50 bg-black/60 flex items-center justify-center"
    >
      <div className="bg-white rounded-2xl shadow-xl p-8 w-96 relative text-center ">
        <div className="text-7xl mb-4">😂</div>
        <h2 className="text-2xl font-bold mb-2 text-red-600">تو باختی!</h2>
        <p className="text-lg mb-4">
          امتیازت: <span className="font-bold">{ 100}</span>
        </p>
        <div className="flex justify-around mt-6">
          <button
            onClick={restartHandler}
            className="bg-green-500 cursor-pointer text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition"
          >
            شروع مجدد
          </button>
         
        </div>
      </div>
    </div>
  );
}

export default GameOverModal;
