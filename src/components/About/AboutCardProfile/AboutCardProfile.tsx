import { Button } from "@ui/forms";
import { Avatar } from "@ui/general";
import { PencilFill } from "@ui/icons";
import { MouseEventHandler } from "react";

export type TAboutCardProfileProps = {
  userImage: string;
  userName: string;
  onClick: MouseEventHandler;
};

const AboutCardProfile = ({
  userImage,
  userName,
  onClick,
}: TAboutCardProfileProps) => {
  return (
    <div className=" gwk-flex gwk-justify-between gwk-items-baseline gwk-p-4 gwk-rounded-rdlg">
      <div className="gwk-flex gwk-items-center gwk-justify-center">
        <Avatar image={userImage} className="gwk-w-16 gwk-h-16" />
        <span className="gwk-text-2xl gwk-p-2 gwk-font-bold">{userName}</span>
      </div>
      <Button btnType="icon" onClick={onClick} size="small" variant="primary">
        <Button.Icon icon={PencilFill} />
      </Button>
    </div>
  );
};

export default AboutCardProfile;
