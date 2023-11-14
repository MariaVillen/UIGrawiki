import { Review, TitleCard } from "@ui/components";
import { StateIcon } from "@ui/general";
import { PencilFill } from "@ui/icons";
import ReactionPanel from "../ReactionPannel/ReactionPannel";
import CardContainer from "./components/CardContainer";

export type TCardProps = {
  id: string;
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
  isOpen: boolean;
};

const Card = ({
  id,
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
  isOpen,
}: TCardProps) => {
  return (
    <div className="gwk-rounded-rdlg gwk-overflow-hidden gwk-p-0">
      <TitleCard subtitle={subtitle} title={title}>
        {isLogged && <StateIcon icon={PencilFill} round state="secondary" />}
      </TitleCard>
      {isLogged && (
        <Review
          className="gwk-bg-surface-background-dark"
          lastVersion={lastVersion}
          onDelete={onDelete}
          onEdit={onEdit}
          isOpen={isOpen}
          writers={writersQuantity}
        />
      )}
      <div className="gwk-bg-surface-triarty-white">
        <CardContainer tags={tags} isOpen={isOpen} id={id}>
          {content} isOpen={isOpen}
        </CardContainer>
        <ReactionPanel
          className="mobile:gwk-pt-1"
          isLogged={isLogged}
          data={reactions}
          userReacted={userReaction}
        />
      </div>
    </div>
  );
};

export default Card;
