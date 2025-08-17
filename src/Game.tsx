
import CustomProvider from "./components/CustomProvider";
import GameInner from "./components/GameInner";


export default function Game() {
  return (
    <CustomProvider>
      <GameInner />
    </CustomProvider>
  );
}

