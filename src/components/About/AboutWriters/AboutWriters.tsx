import { Icon } from "@ui/general";
import { Writing3D } from "@ui/icons";
import { cn } from "@ui/utils";
import { HTMLAttributes } from "react";

export type TAboutWriters = HTMLAttributes<HTMLDivElement> & {
  writers: number;
};

const AboutWriters = ({ writers, children, className }: TAboutWriters) => {
  return (
    <div
      className={cn(
        "gwk-flex gwk-items-center gwk-gap-4 gwk-text-text-white gwk-font-bold",
        className,
      )}
    >
      <div className="gwk-text-base gwk-font-normal gwk-flex gwk-justify-center gwk-items-center gwk-flex-nowrap gwk-whitespace-nowrap gwk-gap-1">
        <Icon elementSrc={Writing3D} /> <span>{writers} escritores</span>
      </div>
      {children && <div>{children}</div>}
    </div>
  );
};

export default AboutWriters;
