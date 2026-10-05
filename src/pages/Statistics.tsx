import Wrapper from "@/components/Wrapper";
import LayoutCard from "@/components/LayoutCard";
import PlayerCard from "@/components/PlayerCard";
import AlertCard from "@/components/AlertCard";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { getPlayerStatService } from "@/services/matchService";
import type { STATS } from "@/lib/const";
import { Spinner } from "@/components/ui/spinner";

function Statistics() {
  const [stats, setStats] = useState<STATS>();
  const [isLoading, setIsLoading] = useState<boolean>();

  const getPlayerStats = async () => {
    try {
      setIsLoading(true);
      const { data } = await getPlayerStatService();

      if (data) {
        setIsLoading(false);
        setStats(data?.data);
      }
    } catch (error) {
      setIsLoading(false);
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

        {!isLoading && !stats && <AlertCard title="No data found." />}

        {isLoading && (
          <div className="flex items-center justify-center h-2/3 w-full">
            <Spinner className="size-10 text-green-950" />
          </div>
        )}

        {!isLoading && stats && (
          <section className="mt-8">
            <div className="flex items-center flex-wrap gap-4">
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
                  <PlayerCard
                    playerName={item?.playerName}
                    wins={item?.wins}
                    key={`player-${idx}`}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </LayoutCard>
    </Wrapper>
  );
}

export default Statistics;
