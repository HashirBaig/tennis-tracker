import type { PLAYER_WINS_STATS } from "@/lib/const";
import { CircleUserRound } from "lucide-react";

function PlayerCard({ playerName, wins }: PLAYER_WINS_STATS) {
  return (
    <div className="w-full bg-green-800/10 rounded-lg flex items-center justify-between py-4 px-3">
      <div className="flex items-center gap-2">
        <CircleUserRound className="size-10 text-green-950/90" />
        <span className="text-md text-green-950 font-normal">{playerName}</span>
      </div>

      <div className="flex items-center">
        <span className="bg-green-800/80 flex items-center justify-center rounded-lg px-3 py-1 text-sm">
          {wins} Wins
        </span>
      </div>
    </div>
  );
}

export default PlayerCard;
