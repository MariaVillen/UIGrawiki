import { cn } from "@ui/utils";
import { HTMLAttributes } from "react";

export type TTitleCardProps = HTMLAttributes<HTMLDivElement> & {
  title: string;
  subtitle: string;
  rounded?: boolean;
};

const TitleCard = ({
  title,
  subtitle,
  children,
  className,
  rounded = false,
}: TTitleCardProps) => {
  return (
    <div
      className={cn(
        " gwk-py-1 gwk-px-4 gwk-flex gwk-items-center gwk-justify-between gwk-text-text-white gwk-bg-surface-primary-hover",
        rounded && "gwk-rounded-t-rdlg",
        className,
      )}
    >
      <div>
        <h3 className=" gwk-text-lg gwk-font-bold">{title}</h3>
        <p className=" gwk-text-base gwk-font-normal">{subtitle}</p>
      </div>
      {children}
    </div>
  );
};

export default TitleCard;
