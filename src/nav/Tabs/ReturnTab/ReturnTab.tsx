import { ArrowLeft } from "@ui/icons";
import { Link, LinkProps } from "react-router-dom";
import { cn } from "@ui/utils";

export type TReturnTabProps = LinkProps & {
  withButton?: boolean;
  separator?: boolean;
};

const ReturnTab = ({
  children,
  withButton,
  separator = true,
  to,
}: TReturnTabProps) => {
  return (
    <div
      className={cn(
        " gwk-flex gwk-gap-2 gwk-justify-between gwk-font-bold gwk-items-center gwk-text-text-white gwk-py-0.5 gwk-pr-1",
        separator && "gwk-border-border-white gwk-border-b",
      )}
    >
      <Link to={to}>
        {withButton && <ArrowLeft className="gwk-h-4 gwk-w-4" />}
      </Link>
      <span
        className={cn(
          "gwk-flex-grow gwk-text-center",
          withButton ? "gwk-text-medium" : "gwk-text-big",
        )}
      >
        {children}
      </span>
    </div>
  );
};

export default ReturnTab;
