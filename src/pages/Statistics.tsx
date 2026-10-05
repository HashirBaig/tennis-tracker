import Wrapper from "@/components/Wrapper";
import LayoutCard from "@/components/LayoutCard";
import PlayerCard from "@/components/PlayerCard";
import AlertCard from "@/components/AlertCard";
import StatsCard from "@/components/StatsCard";

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
              <StatsCard
                label="Total Played"
                playerName="Matches"
                wins={stats?.totalMatchesPlayed}
              />
              <StatsCard
                label="Most Wins"
                playerName={stats?.mostWins?.playerName}
                wins={stats?.mostWins?.wins}
              />
              <StatsCard
                label="Most Wins"
                playerName={stats?.leastWins?.playerName}
                wins={stats?.leastWins?.wins}
                loss={true}
              />
            </div>

            <div className="w-full mt-8">
              <h6 className="text-green-950 font-semibold">Players</h6>

              <div className="space-y-3 mt-4">
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
