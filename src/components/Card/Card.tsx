import { Review, TitleCard } from "@ui/components";
import { StateIcon } from "@ui/general";
import { PencilFill } from "@ui/icons";
import ReactionPanel from "../ReactionPannel/ReactionPannel";
import CardContainer from "./components/CardContainer";

export type TCardProps = {
  subtitle: string;
  title: string;
  lastVersion: string;
  writersQuantity: number;
  tags: string[];
  content: string;
  reactions: { name: string; count: number }[];
  userReaction: string;
  onDelete: () => void;
  onEdit: () => void;
  isLogged: boolean;
};

const Card = ({
  subtitle,
  title,
  lastVersion,
  writersQuantity,
  tags,
  content,
  reactions,
  userReaction,
  onDelete,
  onEdit,
  isLogged,
}: TCardProps) => {
  return (
    <div>
      <TitleCard subtitle={subtitle} title={title}>
        {isLogged && <StateIcon icon={PencilFill} round state="secondary" />}
      </TitleCard>
      {isLogged && (
        <Review
          className="gwk-bg-surface-background-dark"
          lastVersion={lastVersion}
          onDelete={onDelete}
          onEdit={onEdit}
          writers={writersQuantity}
        />
      )}
      <CardContainer tags={tags}>{content}</CardContainer>
      <ReactionPanel
        isLogged={isLogged}
        data={reactions}
        userReacted={userReaction}
      />
    </div>
  );
};

export default Card;
