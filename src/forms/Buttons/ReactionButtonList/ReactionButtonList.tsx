import customReaction, {
  TReactionIcon,
} from "@ui/general/ReactionBar/components/customReactions";
import ReactionButton from "../ReactionButton/ReactionButton";
import { cn } from "@ui/utils";

export type TReactionButtonList = {
  reactions?: TReactionIcon[];
  className?: string;
  userReactions: string[];
  onReaction: (name: string) => void;
};

const ReactionButtonList = ({
  reactions = customReaction,
  className,
  userReactions,
  onReaction,
}: TReactionButtonList) => {
  const handleReaction = (name: string) => {
    onReaction(name);
  };

  return (
    <div className={cn("gwk-flex", className)}>
      {reactions.map(({ name, icon, iconActive }) => (
        <ReactionButton
          key={name}
          icon={icon}
          iconSelected={iconActive}
          isSelected={userReactions.includes(name)}
          onClick={() => handleReaction(name)}
        />
      ))}
    </div>
  );
};

export default ReactionButtonList;
