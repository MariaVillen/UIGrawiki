import { Cards, List } from "@ui/icons";
import { cn } from "@ui/utils";
import { HTMLAttributes } from "react";

export type TViewTabProps = HTMLAttributes<HTMLDivElement> & {
  isListView: boolean;
  withButtons?: boolean;
  setViewTo: (type: boolean) => void;
};

const ViewTab = ({
  children,
  withButtons = true,
  isListView = false,
  setViewTo,
}: TViewTabProps) => {
  const setTypeOfViewTo = (type: boolean) => {
    setViewTo(type);
  };

  return (
    <div className=" gwk-flex gwk-justify-between gwk-text-lg gwk-font-bold gwk-items-center gwk-border-border-white gwk-border-b gwk-text-text-white gwk-py-0.5 gwk-pr-1">
      <span>{children}</span>
      {withButtons && (
        <div className="gwk-flex gwk-justify-center gwk-items-center">
          <button onClick={() => setTypeOfViewTo(true)}>
            <List
              className={cn(
                isListView && "gwk-border-b-[3px] gwk-border-border-white ",
                "gwk-w-9 gwk-h-9",
              )}
            />
          </button>
          <button onClick={() => setTypeOfViewTo.bind(false)}>
            <Cards
              className={cn(
                !isListView && "gwk-border-b-[3px]  gwk-border-border-white",
                "gwk-w-9 gwk-h-9",
              )}
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default ViewTab;
