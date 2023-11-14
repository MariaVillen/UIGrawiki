import { useState } from "react";
import { ReactionBar } from "@ui/general";
import ReactionButtonList from "../../forms/Buttons/ReactionButtonList/ReactionButtonList";
import { cn } from "@ui/utils";

export type TReactionPanelProps = {
  // data of all the reactions, icons and the number of reactions in article
  data: {
    name: string;
    count: number;
  }[];
  // User reaction to the article
  userReacted?: string | undefined;
  isLogged: boolean;
  className?: string;
};

const ReactionPanel = ({
  data,
  userReacted,
  isLogged = true,
  className,
}: TReactionPanelProps) => {
  const [userReaction, setUserReaction] = useState(userReacted);
  const [articleReactions, setArticleReactions] = useState(data);

  const addReaction = (reaction: string) => {
    const updatedReactions = [...articleReactions];
    const index = updatedReactions.findIndex((item) => item.name === reaction);
    if (index === -1) {
      updatedReactions.push({ name: reaction, count: 1 });
    } else {
      updatedReactions[index].count++;
    }
    setArticleReactions(updatedReactions);
  };

  const removeReaction = (oldReaction: string) => {
    const updatedReactions = [...articleReactions];
    const index = updatedReactions.findIndex(
      (item) => item.name === oldReaction,
    );
    if (index !== -1) {
      updatedReactions[index].count--;
      if (updatedReactions[index].count <= 0) {
        setArticleReactions(updatedReactions);
      }
    }
  };

  const handleReaction = (reaction: string) => {
    if (userReaction) removeReaction(userReaction);
    if (userReaction === reaction) {
      setUserReaction("");
    } else {
      addReaction(reaction);
      setUserReaction(reaction);
    }
  };

  return (
    <div className={className}>
      <ReactionBar
        reactions={articleReactions}
        className={cn("gwk-ml-4", isLogged ? "gwk-p-0" : "gwk-p-1")}
      />
      {isLogged && userReaction && (
        <ReactionButtonList
          className="gwk-border-t "
          onReaction={handleReaction}
          userReaction={userReaction}
        />
      )}
    </div>
  );
};

export default ReactionPanel;
