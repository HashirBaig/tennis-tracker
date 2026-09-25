import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";
import TennisBallLogo from "@/assets/tennis_ball_logo.png";

function Hero() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center">
        <img
          src={TennisBallLogo}
          alt="Tennis ball logo"
          className="w-20 h-auto"
        />

        <div className="hidden sm:flex sm:flex-col sm:gap-1">
          <h1 className="font-semibold text-4xl text-green-50">
            Tennis Tracker
          </h1>
          <span className="text-green-50 text-sm">
            Keep track of your games and sets. Simple and quick.
          </span>
        </div>
      </div>

      <div>
        <Button>
          <RotateCcw className="size-7" />
          <span>Reset Match</span>
        </Button>
      </div>
    </header>
  );
}

export default Hero;
