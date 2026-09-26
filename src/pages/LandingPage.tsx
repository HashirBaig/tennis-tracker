"use client";

import Wrapper from "@/components/Wrapper";
import Hero from "@/components/Hero";
import RacketLogo from "@/assets/racket_logo.png";

import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

import { useState } from "react";

type TYPE_PLAYER_FORM = {
  playerOne: string;
  playerTwo: string;
};

const PLAYER_FORM_TEMPLATE = {
  playerOne: "Sinner",
  playerTwo: "Alcaraz",
};

function LandingPage() {
  const [isLoading] = useState<boolean>(false);
  const [setCounter, setSetCounter] = useState<number>(1);
  const [gameCounter, setGameCounter] = useState<number>(1);
  const [player1Games, setPlayer1Games] = useState<number>(0);
  const [player2Games, setPlayer2Games] = useState<number>(0);

  const [formData, setFormData] =
    useState<TYPE_PLAYER_FORM>(PLAYER_FORM_TEMPLATE);

  const handleSet = (params: { incr?: boolean }) => {
    if (params?.incr && setCounter >= 0) setSetCounter(setCounter + 1);
    else if (!params?.incr && setCounter > 0) setSetCounter(setCounter - 1);
  };

  const handleGame = ({
    incr,
    player,
  }: {
    incr?: boolean;
    player?: string | null;
  }) => {
    if (!player) {
      if (incr && gameCounter >= 0) {
        setGameCounter(gameCounter + 1);
      } else {
        setGameCounter(gameCounter - 1);
      }
    }

    if (player === "one") {
      if (incr && gameCounter >= 0) {
        setPlayer1Games(player1Games + 1);
      } else if (!incr && player1Games > 0 && gameCounter > 0) {
        setPlayer1Games(player1Games - 1);
      }
    }

    if (player === "two") {
      if (incr && gameCounter >= 0) {
        setPlayer2Games(player2Games + 1);
      } else if (!incr && player2Games > 0 && gameCounter > 0) {
        setPlayer2Games(player2Games - 1);
      }
    }
  };

  const resetGame = () => {
    setGameCounter(1);
    setSetCounter(1);
    setPlayer1Games(0);
    setPlayer2Games(0);

    setFormData(PLAYER_FORM_TEMPLATE);
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const _data = {
        playerOne: formData?.playerOne,
        playerTwo: formData?.playerTwo,
        sets: setCounter,
        games: gameCounter,
        gamesWonByPlayerOne: player1Games,
        gamesWonByPlayerTwo: player2Games,
      };

      console.log("formdata: ", _data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Wrapper>
      <Hero reset={resetGame} />

      {/* Match Card */}
      <div className="bg-green-50/90 w-full rounded-xl mt-8 p-5">
        <h1 className="text-green-950 text-2xl font-semibold text-center sm:text-start">
          Players
        </h1>

        <form className="mt-8 space-y-4" onSubmit={handleOnSubmit}>
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
              value={formData.playerOne}
              onChange={(e) =>
                setFormData({ ...formData, playerOne: e?.target?.value })
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
              value={formData.playerTwo}
              onChange={(e) =>
                setFormData({ ...formData, playerTwo: e?.target?.value })
              }
              disabled={isLoading}
            />
          </div>

          {/* Game Card */}
          {formData?.playerOne && formData?.playerTwo && (
            <div className="w-full mt-8 bg-green-800 rounded-xl space-y-6 p-3">
              <h1 className="text-center text-green-50 font-extrabold">
                {`${formData?.playerOne} VS ${formData?.playerTwo}`}
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
                  Games
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

              <div className=" border-b border-yellow-50/50"></div>

              <div className="flex items-center justify-around">
                <div className="space-y-2">
                  <h1 className="text-green-50 font-semibold text-center text-sm">
                    {formData?.playerOne}
                  </h1>

                  <div className="flex flex-col items-center gap-2">
                    <Button
                      variant={"circle"}
                      className={"w-fit"}
                      onClick={() => handleGame({ incr: false, player: "one" })}
                    >
                      <Minus className="size-7" />
                    </Button>

                    <span className="text-green-950 bg-green-50/90 w-16 h-16 flex items-center justify-center text-3xl font-semibold rounded-2xl">
                      {player1Games}
                    </span>

                    <Button
                      variant={"circle"}
                      className={"w-fit"}
                      onClick={() => handleGame({ incr: true, player: "one" })}
                    >
                      <Plus className="size-7" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <h1 className="text-green-50 font-semibold text-center text-sm">
                    {formData?.playerTwo}
                  </h1>

                  <div className="flex flex-col items-center gap-2">
                    <Button
                      variant={"circle"}
                      className={"w-fit"}
                      onClick={() => handleGame({ incr: false, player: "two" })}
                    >
                      <Minus className="size-7" />
                    </Button>

                    <span className="text-green-950 bg-green-50/90 w-16 h-16 flex items-center justify-center text-3xl font-semibold rounded-2xl">
                      {player2Games}
                    </span>

                    <Button
                      variant={"circle"}
                      className={"w-fit"}
                      onClick={() => handleGame({ incr: true, player: "two" })}
                    >
                      <Plus className="size-7" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center justify-center">
            <Button type="submit">
              <img src={RacketLogo} alt="ball logo" className="w-10 h-auto" />
              <span>Save Game</span>
            </Button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
}

export default LandingPage;
