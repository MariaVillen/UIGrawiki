import { HTMLAttributes } from "react";
import {
  SkeletonBar,
  SkeletonBarCategory,
  SkeletonSubtitle,
  SkeletonTab,
  SkeletonTabTitle,
  SkeletonTitle,
} from "@ui/layouts";
import { cn } from "../../utils";
import SkeletonCircle from "./SkeletonCircle";

export type SkeletonCardProps = HTMLAttributes<HTMLDivElement>;
const SkeletonCard = ({ children, className, ...rest }: SkeletonCardProps) => {
  return (
    <div
      className={cn(
        "gwk-bg-surface-triarty-hover gwk-bg-opacity-10 gwk-rounded-rdlg gwk-px-3 gwk-py-2",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
export default SkeletonCard;

SkeletonCard.Title = SkeletonTitle;
SkeletonCard.Subtitle = SkeletonSubtitle;
SkeletonCard.Bar = SkeletonBar;
SkeletonCard.BarCategory = SkeletonBarCategory;
SkeletonCard.TabTitle = SkeletonTabTitle;
SkeletonCard.Tab = SkeletonTab;
SkeletonCard.Circle = SkeletonCircle;
