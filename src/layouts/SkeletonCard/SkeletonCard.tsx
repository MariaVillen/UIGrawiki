import { HTMLAttributes } from "react";
import { Skeleton } from "@ui/layouts";
import { partiallyApply, cn } from "../../utils";
import SkeletonCircle from "./SkeletonCircle";

export type SkeletonCardProps = HTMLAttributes<HTMLDivElement>;
const SkeletonCard = ({ children, className }: SkeletonCardProps) => {
  return (
    <div
      className={cn(
        "gwk-bg-surface-triarty-hover gwk-bg-opacity-10 gwk-rounded-rdlg gwk-px-3 gwk-py-2",
        className,
      )}
    >
      {children}
    </div>
  );
};
export default SkeletonCard;

const SkeletonCardTitle = partiallyApply(Skeleton, {
  width: "162px",
  height: "16px",
});

SkeletonCard.Title = SkeletonCardTitle;

const SkeletonCardSubtitle = partiallyApply(Skeleton, {
  width: "114px",
  height: "12px",
});

SkeletonCard.Subtitle = SkeletonCardSubtitle;

const SkeletonCardBar = partiallyApply(Skeleton, {
  width: "310px",
  height: "26px",
});

SkeletonCard.Bar = SkeletonCardBar;

const SkeletonCardBarCategory = partiallyApply(Skeleton, {
  width: "310px",
  height: "45px",
});

SkeletonCard.BarCategory = SkeletonCardBarCategory;

const SkeletonCardTabTitle = partiallyApply(Skeleton, {
  width: "107px",
  height: "30px",
});

SkeletonCard.TabTitle = SkeletonCardTabTitle;

const SkeletonCardTab = partiallyApply(Skeleton, {
  width: "81px",
  height: "30px",
});

SkeletonCard.Tab = SkeletonCardTab;

SkeletonCard.Circle = SkeletonCircle;
