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
import Skeleton from "../Skeleton/Skeleton";

export type SkeletonCardProps = HTMLAttributes<HTMLDivElement> & {
  rounded?: boolean;
};
const SkeletonCard = ({
  children,
  rounded = true,
  className,
  ...rest
}: SkeletonCardProps) => {
  return (
    <div
      className={cn(
        "gwk-bg-surface-triarty-hover gwk-bg-opacity-10  gwk-px-3 gwk-py-2 gwk-inline-flex",
        rounded && "gwk-rounded-rdlg",
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
SkeletonCard.Basic = Skeleton;
