import type { PLAYER_WINS_STATS } from "@/lib/const";
import { cn } from "@/lib/utils";

function StatsCard({ playerName, wins, label, loss }: PLAYER_WINS_STATS) {
  return (
    <div className="bg-green-800/95 shadow-md rounded-lg w-full sm:w-50 p-3">
      <h6 className="font-semibold text-green-50 text-center">{label}</h6>

      <div className="flex items-center gap-2 mt-2 justify-center">
        <span className="font-normal text-green-50">{playerName}</span>
        <span
          className={cn(
            "font-semibold w-6 h-6 text-sm rounded-full flex items-center justify-center",
            {
              "bg-green-50/70 text-green-900": !loss,
              "bg-red-800/70 text-red-100": loss,
            },
          )}
        >
          {wins}
        </span>
      </div>
    </div>
  );
}

export default StatsCard;
