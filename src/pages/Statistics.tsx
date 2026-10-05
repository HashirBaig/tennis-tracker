import Wrapper from "@/components/Wrapper";
import LayoutCard from "@/components/LayoutCard";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { getPlayerStatService } from "@/services/matchService";

import { CircleUserRound } from "lucide-react";

function Statistics() {
  const [stats, setStats] = useState();

  const getPlayerStats = async () => {
    try {
      const { data } = await getPlayerStatService();
      console.log(data?.data);
      setStats(data?.data);
    } catch (error) {
      console.error(error);
      toast.error("Operation failed.");
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getPlayerStats();
  }, []);

  return (
    <Wrapper>
      <LayoutCard>
        <h1 className="text-green-950 text-2xl font-semibold text-center sm:text-start">
          Statistics
        </h1>

        <div className="flex items-center flex-wrap gap-4 mt-8">
          <div className="border-green-950 border rounded-lg w-25 p-3">
            <h6 className="font-semibold text-green-950">Total</h6>

            <div className="flex items-center">
              <span className="font-semibold bg-gray-800/70 text-red-50 w-6 h-6 text-sm rounded-full flex items-center justify-center">
                {stats?.totalMatchesPlayed}
              </span>
            </div>
          </div>

          <div className="border-green-950 border rounded-lg w-30 p-3">
            <h6 className="font-semibold text-green-950">Most Wins</h6>

            <div className="flex items-center gap-2">
              <span className="font-normal text-green-950">
                {stats?.mostWins?.playerName}
              </span>
              <span className="font-semibold bg-green-800/70 text-green-50 w-6 h-6 text-sm rounded-full flex items-center justify-center">
                {stats?.mostWins?.wins}
              </span>
            </div>
          </div>

          <div className="border-green-950 border rounded-lg w-30 p-3">
            <h6 className="font-semibold text-green-950">Least Wins</h6>

            <div className="flex items-center gap-2">
              <span className="font-normal text-green-950">
                {stats?.leastWins?.playerName}
              </span>
              <span className="font-semibold bg-red-800/70 text-red-50 w-6 h-6 text-sm rounded-full flex items-center justify-center">
                {stats?.leastWins?.wins}
              </span>
            </div>
          </div>
        </div>

        <div className="w-full mt-8">
          <h6 className="text-green-950 font-normal">Players</h6>

          <div className="space-y-3">
            {/* PlayerCard */}
            {stats?.perPlayerStats?.map((item, idx) => (
              <div
                className="w-full bg-green-800/10 rounded-lg flex items-center justify-between py-4 px-3"
                key={`player-${idx}`}
              >
                <div className="flex items-center gap-2">
                  <CircleUserRound className="size-10 text-green-950/90" />
                  <span className="text-md text-green-950 font-normal">
                    {item?.playerName}
                  </span>
                </div>

                <div className="flex items-center">
                  <span className="bg-green-800/80 flex items-center justify-center rounded-lg px-3 py-1 text-sm">
                    {item?.wins} Wins
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </LayoutCard>
    </Wrapper>
  );
}

export default Statistics;
