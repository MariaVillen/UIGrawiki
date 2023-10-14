import { ToggleButton } from "@ui/forms";
import { Avatar, Icon } from "@ui/general";
import { NotificationActiveFill, NotificationOutline } from "@ui/icons";
import { TUser } from "@ui/interface/users";
import { HTMLAttributes } from "react";

export type TProfileTabProps = HTMLAttributes<HTMLDivElement> & {
  user?: TUser;
  isLogged: boolean;
};

const ProfileTab = ({ children, isLogged, user }: TProfileTabProps) => {
  return (
    <div className="gwk-text-text-white gwk-gap-4 gwk-justify-between gwk-h-10 gwk-flex gwk-items-center">
      <div className="gwk-flex-grow">{children}</div>
      <div className="gwk-flex gwk-items-center gwk-gap-4">
        {isLogged && (
          <Avatar
            image={user?.avatar}
            alt={user?.name}
            className="gwk-h-8 gwk-w-8"
          />
        )}
        <ToggleButton
          iconFalse={
            <Icon
              className="gwk-h-8 gwk-w-8 gwk-bg-surface-primary gwk-rounded-full"
              elementSrc={NotificationOutline}
            />
          }
          iconTrue={
            <Icon
              className="gwk-h-8 gwk-w-8 gwk-bg-surface-primary gwk-rounded-full"
              elementSrc={NotificationActiveFill}
            />
          }
        />
      </div>
    </div>
  );
};

export default ProfileTab;
