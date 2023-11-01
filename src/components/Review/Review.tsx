import { Button } from "@ui/forms";
import { AboutWriters } from "@ui/components";
import { PencilFill, Trash } from "@ui/icons";
import { CSSProperties, HTMLAttributes } from "react";
import { cn } from "@ui/utils";

export type TReviewProps = HTMLAttributes<HTMLDivElement> & {
  writers: number;
  lastVersion: string;
  onDelete: () => void;
  onEdit: () => void;
  className?: CSSProperties;
};

const Review = ({
  writers,
  lastVersion,
  onDelete,
  onEdit,
  className,
}: TReviewProps) => {
  return (
    <div className={cn("gwk-p-2", className)}>
      <AboutWriters writers={writers} className="gwk-p-2">
        <span className="gwk-text-text-disable gwk-whitespace-nowrap">
          Ultima versión {lastVersion}
        </span>
      </AboutWriters>
      <div className="gwk-flex gwk-flex-col gwk-justify-start gwk-gap-2 gwk-px-2 gwk-items-center mobilepp:gwk-flex-row mobilepp:gwk-gap-4">
        <Button
          className="gwk-text-text-white"
          btnType="button"
          onClick={onEdit}
          size="medium"
          variant="primary"
        >
          <Button.Icon icon={PencilFill} size="medium" /> Editar
        </Button>
        <Button
          className="gwk-text-text-white"
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
