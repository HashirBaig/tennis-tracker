import { Badge } from "@/components/ui/badge";
import { Crown } from "lucide-react";

import type { TYPE_MATCH_PAYLOAD } from "@/lib/const";
import dayjs from "dayjs";

type MatchCardProps = {
  data: TYPE_MATCH_PAYLOAD;
};

function MatchCard({ data }: MatchCardProps) {
  const {
    playerOne,
    playerTwo,
    gamesWonByPlayerOne,
    gamesWonByPlayerTwo,
    createdDate,
  } = data;

  return (
    <div className="w-full bg-green-800/95 p-4 shadow-md rounded-2xl my-2 space-y-2 hover:focus-visible:border-green-600 hover:ring-2 hover:ring-green-800/70">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-green-50 font-normal text-center w-fit">
            {playerOne} vs {playerTwo}
          </span>

          <Badge className="bg-gray-50/30 text-gray-50 border-gray-50/20 font-semibold">
            {gamesWonByPlayerOne} - {gamesWonByPlayerTwo}
          </Badge>

          <span className="text-xs font-semibold text-yellow-500">
            {dayjs(createdDate).format("DD MMM, YYYY")}
          </span>
        </div>

        {(gamesWonByPlayerOne || gamesWonByPlayerTwo) && (
          <Badge className="bg-yellow-500/30 text-yellow-500 border-yellow-500/20">
            <Crown className="size-5" />
            <span className="text-lg font-normal">
              {gamesWonByPlayerOne > gamesWonByPlayerTwo
                ? playerOne
                : playerTwo}
            </span>
          </Badge>
        )}
      </div>
    </div>
  );
}

export default MatchCard;
