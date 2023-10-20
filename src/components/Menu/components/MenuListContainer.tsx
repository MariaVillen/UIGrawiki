import { Button } from "@ui/forms";
import { Icon } from "@ui/general";
import { CloseTag } from "@ui/icons";
import { HTMLAttributes } from "react";

const MenuListContainer = ({ children }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="gwk-p-6 gwk-flex gwk-flex-col gwk-justify-start gwk-h-full gwk-bg-surface-triarty-white gwk-text-text-black">
      <Button variant="ghost" btnType="icon" className="gwk-h-6 gwk-w-6">
        <Icon elementSrc={CloseTag} fluid className="gwk-text-text-black" />
      </Button>
      {children}
    </div>
  );
};

export default MenuListContainer;
