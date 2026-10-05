import type { PLAYER_WINS_STATS } from "@/lib/const";
import { cn } from "@/lib/utils";

function StatsCard({ playerName, wins, label, loss }: PLAYER_WINS_STATS) {
  return (
    <div className="bg-green-800/25 shadow-md rounded-lg w-full sm:w-50 p-3">
      <h6 className="font-semibold text-green-950 text-center sm:text-start">
        {label}
      </h6>

      <div className="flex items-center gap-2 mt-2 justify-center">
        <span className="font-normal text-green-950">{playerName}</span>
        <span
          className={cn(
            "font-semibold  text-green-50 w-6 h-6 text-sm rounded-full flex items-center justify-center",
            {
              "bg-green-800/70": !loss,
              "bg-red-800/70": loss,
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
