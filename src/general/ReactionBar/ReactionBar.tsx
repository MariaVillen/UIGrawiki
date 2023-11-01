import { TReactions } from "@ui/interface/articles";
import ReactionCounter from "./components/ReactionCounter";
import { CSSProperties } from "react";
import { cn } from "@ui/utils";

export type TReactionBarProps = {
  reactions: TReactions[];
  className?: CSSProperties | string;
};

const ReactionBar = ({ reactions, className }: TReactionBarProps) => (
  <div className={cn("gwk-flex gwk-items-center", className)}>
    {reactions.map(({ name, count }) => {
      if (count !== 0) {
        return <ReactionCounter key={name} name={name} count={count} />;
      }
    })}
  </div>
);

export default ReactionBar;
