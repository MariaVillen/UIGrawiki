import { Icon, Logo } from "@ui/general";
import { Button, SearchButton, ToggleNotification } from "@ui/forms";
import { MenuList, MenuNavButton, MenuContainer } from "./components";
import { TCategoryItem } from "@ui/interface/categories";
import useViewDetection from "@ui/utils/hooks/useViewDetection";
import { useState } from "react";
import { AvatarFill, AvatarOutline, CloseTag, Create } from "@ui/icons";

export type TMenuProps = {
  isNotification: boolean;
  onSearch: () => void;
  isLogged: boolean;
  menuItems: Omit<TCategoryItem, "tags">[];
};

const Menu = ({
  isNotification,
  onSearch,
  isLogged,
  menuItems,
}: TMenuProps) => {
  const { width } = useViewDetection();
  const [isOpen, setOpen] = useState(width > 360 ? true : false);
  const handleMenu = () => setOpen(!isOpen);
  const closeMenu = () => setOpen(false);

  return (
    <header className="gwk-flex gwk-flex-col mobile:gwk-w-32 mobile:gwk-h-[1080px] mobile:gwk-pt-9 mobile:gwk-pb-5">
      <div className="gwk-flex gwk-justify-between gwk-items-center gwk-relative mobile:gwk-flex-col mobile:gwk-flex-grow">
        <Logo
          type={width > 360 ? "menu" : "vertical"}
          theme="light"
          className="gwk-w-[115px] gwk-h-[41px]"
        />
        <div className="gwk-flex">
          <Menu.Search
            onClick={onSearch}
            variant="ghost"
            className="gwk-w-[50px] gwk-h-[50px] gwk-text-text-black hover:gwk-bg-transparent hover:gwk-text-text-primary mobile:gwk-hidden"
          />
          {isLogged && (
            <Menu.Notification
              onClick={() => console.log("notificaciones")}
              isActive={isNotification}
              className="gwk-w-[50px] gwk-h-[50px] mobile:gwk-hidden"
            />
          )}
          <Menu.NavButton
            onClick={handleMenu}
            isActive={isOpen}
            className="mobile:gwk-hidden"
          />
        </div>
      </div>
      {isOpen && (
        <Menu.Container className="mobile:gwk-justify-between mobile:gwk-pt-14">
          <Button
            variant="ghost"
            btnType="icon"
            size="big"
            className="gwk-h-6 gwk-w-6 mobile:gwk-hidden gwk-mb-[50px] gwk-p-0"
            onClick={closeMenu}
          >
            <Icon elementSrc={CloseTag} fluid className="gwk-text-text-black" />
          </Button>
          <Menu.List menuItems={menuItems} variant="responsive">
            <MenuList.Li>
              <MenuList.Item
                icon={Create}
                iconActive={Create}
                to="/create"
                variant="responsive"
                iconStyles="mobile:gwk-bg-surface-triarty-white mobile:gwk-text-text-black group-hover:mobile:gwk-bg-surface-triarty-hover"
              >
                Crear Tema
              </MenuList.Item>
            </MenuList.Li>
          </Menu.List>
          <ul>
            <MenuList.Li className="gwk-mt-[20px]">
              <MenuList.Item
                icon={isLogged ? AvatarOutline : CloseTag}
                iconActive={isLogged ? AvatarFill : CloseTag}
                to={isLogged ? "/logout" : "/login"}
                variant="responsive"
              >
                {isLogged ? "Cerrar sesión" : "Iniciar sesión"}
              </MenuList.Item>
            </MenuList.Li>
          </ul>
        </Menu.Container>
      )}
    </header>
  );
};

export default Menu;

Menu.List = MenuList;
Menu.NavButton = MenuNavButton;
Menu.Notification = ToggleNotification;
Menu.Search = SearchButton;
Menu.Container = MenuContainer;
