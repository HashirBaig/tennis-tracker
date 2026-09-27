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
    <div className="w-full bg-green-800 p-4 rounded-2xl my-1 space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-green-50 font-normal text-center w-fit">
          {playerOne} vs {playerTwo}
        </span>
        <Badge className="bg-gray-50/30 text-gray-50 border-gray-50/20 font-semibold">
          {gamesWonByPlayerOne} - {gamesWonByPlayerTwo}
        </Badge>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold">
          {dayjs(createdDate).format("DD-MM-YYYY")}
        </span>
        {gamesWonByPlayerOne || gamesWonByPlayerTwo ? (
          <Badge className="bg-yellow-500/30 text-yellow-500 border-yellow-500/20 font-semibold">
            <Crown className="size-4" />
            {gamesWonByPlayerOne > gamesWonByPlayerTwo ? playerOne : playerTwo}
          </Badge>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default MatchCard;
