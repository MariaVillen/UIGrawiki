import { TReactions } from "@ui/interface/articles";
import ReactionCounter from "./components/ReactionCounter";

export type TReactionBarProps = {
  reactions: TReactions[];
};

const ReactionBar = ({ reactions }: TReactionBarProps) => (
  <div className="gwk-flex gwk-items-center">
    {reactions.map(({ name, count }) => {
      if (count !== 0) {
        return <ReactionCounter key={name} name={name} count={count} />;
      }
    })}
  </div>
);

export default ReactionBar;
