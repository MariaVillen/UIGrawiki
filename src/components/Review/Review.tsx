import { Button } from "@ui/forms";
import { AboutWriters } from "@ui/components";
import { PencilFill, Trash } from "@ui/icons";
import { HTMLAttributes } from "react";

export type TReviewProps = HTMLAttributes<HTMLDivElement> & {
  writers: number;
  lastVersion: string;
  onDelete: () => void;
  onEdit: () => void;
};

const Review = ({ writers, lastVersion, onDelete, onEdit }: TReviewProps) => {
  return (
    <div className="gwk-p-2">
      <AboutWriters writers={writers} className="gwk-p-2">
        <span className="gwk-text-text-disable gwk-whitespace-nowrap">
          Ultima versión {lastVersion}
        </span>
      </AboutWriters>
      <div className="gwk-flex gwk-flex-col gwk-justify-start gwk-gap-2 gwk-p-2 gwk-items-center mobilepp:gwk-flex-row mobilepp:gwk-gap-4">
        <Button
          btnType="button"
          onClick={onEdit}
          size="medium"
          variant="primary"
        >
          <Button.Icon icon={PencilFill} size="medium" /> Editar
        </Button>
        <Button
          btnType="button"
          onClick={onDelete}
          size="medium"
          variant="secondary"
        >
          <Button.Icon icon={Trash} size="medium" /> Eliminar
        </Button>
      </div>
    </div>
  );
};

export default Review;
