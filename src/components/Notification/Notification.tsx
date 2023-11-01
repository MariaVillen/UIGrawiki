import { TitleEdit } from "@ui/components";
import { HTMLAttributes, ReactElement } from "react";

export type TNotificationProps = HTMLAttributes<HTMLDivElement> & {
  label: ReactElement | string;
  variant?: "primary" | "secondary" | "warning" | "custom";
};

const Notification = ({
  label,
  children,
  className,
  variant = "custom",
}: TNotificationProps) => {
  return (
    <div className={className}>
      <TitleEdit label={label} variant={variant} rounded={true} />
      <div className="gwk-py-2 gwk-px-4 gwk-max-w-full gwk-rounded-b-rdlg gwk-bg-surface-triarty-white gwk-text-text-black">
        {children}
      </div>
    </div>
  );
};

export default Notification;
