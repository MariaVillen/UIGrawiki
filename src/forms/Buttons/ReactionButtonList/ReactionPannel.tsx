import { useState } from "react";
import { ReactionBar } from "@ui/general";
import ReactionButtonList from "./ReactionButtonList";
import { removeFromArray } from "@ui/utils";

export type TReactionPanelProps = {
  // data of all the reactions, icons and the number of reactions
  data: {
    name: string;
    count: number;
  }[];
  // array of the reactions that the user has made
  userReacted: string[];
};

const ReactionPanel = ({ data, userReacted }: TReactionPanelProps) => {
  const [userReactions, setUserReactions] = useState(userReacted);
  const [articleReactions, setArticleReactions] = useState(data);

  const addReactionToCounter = (reaction: string) => {
    const updatedReactions = [...articleReactions];
    const index = updatedReactions.findIndex((item) => item.name === reaction);
    if (index === -1) {
      updatedReactions.push({ name: reaction, count: 1 });
    } else {
      updatedReactions[index].count++;
    }
    setArticleReactions(updatedReactions);
  };

  const deleteReactionFromCounter = (reaction: string) => {
    const updatedReactions = [...articleReactions];
    const index = updatedReactions.findIndex((item) => item.name === reaction);
    if (index !== -1) {
      updatedReactions[index].count--;
      if (updatedReactions[index].count <= 0) {
        setArticleReactions(updatedReactions);
      }
    }
  };

  const handleReaction = (reaction: string) => {
    if (userReactions.includes(reaction)) {
      const newReactions = removeFromArray(userReactions, reaction);
      deleteReactionFromCounter(reaction);
      setUserReactions(newReactions);
    } else {
      setUserReactions((prev) => [...prev, reaction]);
      addReactionToCounter(reaction);
    }
  };

  return (
    <div>
      <ReactionBar data={articleReactions} />
      <ReactionButtonList
        onReaction={handleReaction}
        userReactions={userReactions}
      />
    </div>
  );
};

export default ReactionPanel;
