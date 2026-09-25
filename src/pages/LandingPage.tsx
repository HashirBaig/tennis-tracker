"use client";

import Wrapper from "@/components/Wrapper";
import Hero from "@/components/Hero";

import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

import { useState } from "react";

type TYPE_PLAYER_FORM = {
  player_1: string;
  player_2: string;
};

const PLAYER_FORM_TEMPLATE = {
  player_1: "Sinner",
  player_2: "Alcaraz",
};

function LandingPage() {
  const [isLoading] = useState<boolean>(false);
  const [setCounter, setSetCounter] = useState<number>(1);
  const [gameCounter, setGameCounter] = useState<number>(1);
  const [formData, setFormData] =
    useState<TYPE_PLAYER_FORM>(PLAYER_FORM_TEMPLATE);

  const handleSet = (params: { incr?: boolean }) => {
    if (params?.incr && setCounter >= 0) setSetCounter(setCounter + 1);
    else if (!params?.incr && setCounter > 0) setSetCounter(setCounter - 1);
  };

  const handleGame = (params: { incr?: boolean }) => {
    if (params?.incr && gameCounter >= 0) setGameCounter(gameCounter + 1);
    else if (!params?.incr && gameCounter > 0) setGameCounter(gameCounter - 1);
  };

  const resetGame = () => {
    setGameCounter(1);
    setSetCounter(1);
    setFormData(PLAYER_FORM_TEMPLATE);
  };

  return (
    <Wrapper>
      <Hero reset={resetGame} />

      {/* Match Card */}
      <div className="bg-green-50/90 w-full rounded-xl mt-8 p-5">
        <h1 className="text-green-950 text-2xl font-semibold text-center sm:text-start">
          Players
        </h1>

        <form className="mt-8 space-y-4">
          <div className="space-y-2">
            <Label
              htmlFor="player-1"
              className="text-green-950 font-semibold text-md"
            >
              Player 1
            </Label>
            <Input
              id="player-1"
              type="text"
              placeholder="e.g John Doe"
              value={formData.player_1}
              onChange={(e) =>
                setFormData({ ...formData, player_1: e?.target?.value })
              }
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="player-2"
              className="text-green-950 font-semibold text-md"
            >
              Player 2
            </Label>
            <Input
              id="player-2"
              type="text"
              placeholder="e.g Doe John"
              value={formData.player_2}
              onChange={(e) =>
                setFormData({ ...formData, player_2: e?.target?.value })
              }
              disabled={isLoading}
            />
          </div>

          {/* Game Card */}
          {formData?.player_1 && formData?.player_2 && (
            <div className="w-full mt-8 bg-green-800 rounded-xl space-y-6 p-3">
              <h1 className="text-center text-green-50 font-extrabold">
                {`${formData?.player_1} & ${formData?.player_2}`}
              </h1>

              <div className="space-y-2">
                <h1 className="text-green-50 text-center font-normal text-sm">
                  Sets
                </h1>

                <div className="flex items-center justify-center gap-3">
                  <Button
                    variant={"circle"}
                    onClick={() => handleSet({ incr: false })}
                  >
                    <Minus className="size-7" />
                  </Button>

                  <span className="text-green-950 bg-green-50/90 w-36 h-18 flex items-center justify-center text-3xl font-semibold rounded-2xl">
                    {setCounter}
                  </span>

                  <Button
                    variant={"circle"}
                    onClick={() => handleSet({ incr: true })}
                  >
                    <Plus className="size-7" />
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <h1 className="text-green-50 text-center font-normal text-sm">
                  Games (Current Set)
                </h1>

                <div className="flex items-center justify-center gap-3">
                  <Button
                    variant={"circle"}
                    onClick={() => handleGame({ incr: false })}
                  >
                    <Minus className="size-7" />
                  </Button>

                  <span className="text-green-950 bg-green-50/90 w-36 h-18 flex items-center justify-center text-3xl font-semibold rounded-2xl">
                    {gameCounter}
                  </span>

                  <Button
                    variant={"circle"}
                    onClick={() => handleGame({ incr: true })}
                  >
                    <Plus className="size-7" />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </Wrapper>
  );
}

export default LandingPage;
