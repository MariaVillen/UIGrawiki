import { useState } from "react";
import { ReactionBar } from "@ui/general";
import ReactionButtonList from "../../forms/Buttons/ReactionButtonList/ReactionButtonList";

export type TReactionPanelProps = {
  // data of all the reactions, icons and the number of reactions in article
  data: {
    name: string;
    count: number;
  }[];
  // User reaction to the article
  userReacted: string;
};

const ReactionPanel = ({ data, userReacted }: TReactionPanelProps) => {
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
    removeReaction(userReaction);
    if (userReaction === reaction) {
      setUserReaction("");
    } else {
      addReaction(reaction);
      setUserReaction(reaction);
    }
  };

  return (
    <div>
      <ReactionBar reactions={articleReactions} />
      <ReactionButtonList
        onReaction={handleReaction}
        userReaction={userReaction}
      />
    </div>
  );
};

export default ReactionPanel;
