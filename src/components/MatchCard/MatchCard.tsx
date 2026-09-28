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
        <div className="flex flex-col gap-2">
          <div className="space-x-2">
            <span className="text-green-50 font-normal text-center w-fit">
              {playerOne} vs {playerTwo}
            </span>

            <Badge className="bg-gray-50/30 text-gray-50 border-gray-50/20 font-semibold">
              {gamesWonByPlayerOne} - {gamesWonByPlayerTwo}
            </Badge>
          </div>

          <span className="text-sm font-semibold">
            {dayjs(createdDate).format("DD-MM-YYYY")}
          </span>
        </div>

        <div className="flex items-center">
          {gamesWonByPlayerOne || gamesWonByPlayerTwo ? (
            <Badge className="bg-yellow-500/30 text-yellow-500 border-yellow-500/20">
              <Crown className="size-5" />
              <span className="text-lg font-normal">
                {gamesWonByPlayerOne > gamesWonByPlayerTwo
                  ? playerOne
                  : playerTwo}
              </span>
            </Badge>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default MatchCard;
