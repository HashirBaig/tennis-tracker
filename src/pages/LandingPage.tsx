"use client";
import Wrapper from "@/components/Wrapper";
import Hero from "@/components/Hero";

import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
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
  const [formData, setFormData] =
    useState<TYPE_PLAYER_FORM>(PLAYER_FORM_TEMPLATE);

  return (
    <Wrapper>
      <Hero />

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
            <div className="w-full mt-8 bg-green-800 rounded-xl space-y-2 p-3">
              <h1 className="text-center text-green-50 font-extrabold">
                {`${formData?.player_1} & ${formData?.player_2}`}
              </h1>

              <div>
                <h1 className="text-green-50 text-center">Sets</h1>
              </div>
            </div>
          )}
        </form>
      </div>
    </Wrapper>
  );
}

export default LandingPage;
