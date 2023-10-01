import { HTMLAttributes } from "react";
import Skeleton from "../Skeleton/Skeleton";

export type SkeletonCircleProps = HTMLAttributes<HTMLDivElement> & {
  size: "sm" | "md" | "lg";
};

const SkeletonCircle = ({ size }: SkeletonCircleProps) => {
  const sizes = {
    sm: { width: "22px", height: "22px" },
    md: { width: "26px", height: "26px" },
    lg: { width: "32px", height: "32px" },
  };
  return <Skeleton shape="circle" {...sizes[size]} />;
};

export default SkeletonCircle;
