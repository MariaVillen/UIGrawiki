import { Icon } from "@ui/general";
import customReaction, { TReactionIcon } from "./customReactions";

export type TReactionCounterProps = {
  name: string;
  count: number;
  reactions?: TReactionIcon[];
};

const ReactionCounter = ({
  name,
  count,
  reactions = customReaction,
}: TReactionCounterProps) => {
  const reaction = reactions.find((el: TReactionIcon) => el.name === name);
  return (
    <div className="gwk-flex gwk-items-center">
      {reaction && (
        <Icon
          elementSrc={reaction.iconActive}
          className="gwk-h-6 gwk-w-6 gwk-text-center"
        />
      )}
      <span className="gwk-h-6 gwk-w-6 gwk-text-center">{count}</span>
    </div>
  );
};

export default ReactionCounter;
