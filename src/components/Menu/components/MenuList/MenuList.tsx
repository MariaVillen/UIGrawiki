import { TCategoryItem } from "@ui/interface/categories";
import { MenuItem } from "@ui/nav";
import { cn } from "@ui/utils";
import { HTMLAttributes } from "react";
import MenuLi from "../MenuLi/MenuLi";

export type TMenuListProps = HTMLAttributes<HTMLUListElement> & {
  menuItems: Omit<TCategoryItem, "tags">[];
  variant: "horizontal" | "vertical" | "responsive";
};

const MenuList = ({
  menuItems,
  variant,
  children,
  className,
}: TMenuListProps) => {
  return (
    <ul
      className={cn(
        "gwk-flex gwk-flex-col  gwk-gap-5 gwk-flex-grow",
        className,
      )}
    >
      {menuItems.map(({ id, icon, iconActive, link, text }) => (
        <MenuList.Li
          className="gwk-flex gwk-flex-row gwk-justify-start mobile:gwk-justify-center"
          key={id}
        >
          <MenuList.Item
            icon={icon}
            iconActive={iconActive}
            to={link}
            variant={variant}
          >
            {text}
          </MenuList.Item>
        </MenuList.Li>
      ))}
      {children}
    </ul>
  );
};

export default MenuList;

MenuList.Li = MenuLi;
MenuList.Item = MenuItem;
