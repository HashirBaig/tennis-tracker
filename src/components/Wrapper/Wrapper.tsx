import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

type PropsWithChildren = {
  children: ReactNode;
  classnames?: string;
};

function Wrapper({ children, classnames }: PropsWithChildren) {
  return (
    <div className={cn("w-full px-8 py-4 relative text-green-50", classnames)}>
      {children}
    </div>
  );
}

export default Wrapper;
