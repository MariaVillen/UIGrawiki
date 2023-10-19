import { TitleEdit } from "@ui/components";
import { HTMLAttributes, ReactElement } from "react";

export type TNotificationProps = HTMLAttributes<HTMLDivElement> & {
  label: ReactElement | string;
};

const Notification = ({ label, children, className }: TNotificationProps) => {
  return (
    <div className={className}>
      <TitleEdit label={label} variant="custom" rounded={true} />
      <div className=" gwk-py-2 gwk-px-4 gwk-rounded-b-rdlg gwk-bg-surface-triarty-white gwk-text-text-black">
        {children}
      </div>
    </div>
  );
};

export default Notification;
