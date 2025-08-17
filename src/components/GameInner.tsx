import { useContext } from "react";
import { Context } from "./CustomProvider";
import CannonColumn from "./CannonColumn";
import TypingGame from "./TypingGame";

export default function GameInner() {
  const { shootBullet } = useContext(Context);

  return (
    <div
      className="h-screen flex  flex-col-reverse object-cover bg-no-repeat bg-center bg-cover justify-end w-full"
      style={{ backgroundImage: "url(/anim.webp)" }}>
      <CannonColumn onShoot={shootBullet} />
      <TypingGame />
    </div>
  );
}
