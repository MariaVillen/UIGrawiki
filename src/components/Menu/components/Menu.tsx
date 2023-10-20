import { Logo } from "@ui/general";
import { SearchButton, ToggleNotification } from "@ui/forms";
import MenuList from "./MenuList";
import { TCategoryItem } from "@ui/interface/categories";
import useViewDetection from "@ui/utils/hooks/useViewDetection";
import { useState } from "react";
import MenuNavButton from "./MenuNavButton";

export type TMenuProps = {
  isNotification: boolean;
  onSearch: () => void;
  menuItems: Omit<TCategoryItem, "tags">[];
};

const Menu = ({ isNotification, onSearch, menuItems }: TMenuProps) => {
  const { width } = useViewDetection();
  const [isOpen, setOpen] = useState(false);
  const handleMenu = () => setOpen(!isOpen);

  return (
    <header className="gwk-flex gwk-flex-col">
      <div className="gwk-flex gwk-justify-between gwk-items-center gwk-relative">
        <Logo
          type="vertical"
          theme="light"
          className="gwk-w-[115px] gwk-h-[41px]"
        />
        <div className="gwk-flex">
          <Menu.Search
            onClick={onSearch}
            variant="ghost"
            className="gwk-w-[50px] gwk-h-[50px] gwk-text-text-black hover:gwk-bg-transparent hover:gwk-text-text-primary"
          />
          <Menu.Notification
            onClick={() => console.log("notificaciones")}
            isActive={isNotification}
            className="gwk-w-[50px] gwk-h-[50px]"
          />
          <Menu.NavButton onClick={handleMenu} isActive={isOpen} />
        </div>
      </div>
      {isOpen && (
        <Menu.List
          menuItems={menuItems}
          variant={width <= 360 ? "horizontal" : "vertical"}
          className="gwk-absolute gwk-z-10 gwk-top-0 gwk-right-0 gwk-bg-surface-triarty-white gwk-w-[50vw] gwk-h-full"
        ></Menu.List>
      )}
    </header>
  );
};

export default Menu;

Menu.List = MenuList;
Menu.NavButton = MenuNavButton;
Menu.Notification = ToggleNotification;
Menu.Search = SearchButton;
