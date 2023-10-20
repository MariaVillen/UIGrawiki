import { TCategoryItem } from "@ui/interface/categories";
import { MenuItem } from "@ui/nav";
import { cn } from "@ui/utils";
import { HTMLAttributes } from "react";

export type TMenuListProps = HTMLAttributes<HTMLUListElement> & {
  menuItems: Omit<TCategoryItem, "tags">[];
  variant: "horizontal" | "vertical" | "responsive";
};

const MenuList = ({ menuItems, variant, className }: TMenuListProps) => {
  return (
    <ul
      className={cn(
        "gwk-flex gwk-flex-col gwk-justify-start gwk-gap-5",
        className,
      )}
    >
      {menuItems.map(({ id, icon, iconActive, link, text }) => (
        <li className=" gwk-flex gwk-justify-start" key={id}>
          <MenuItem
            icon={icon}
            iconActive={iconActive}
            to={link}
            variant={variant}
          >
            {text}
          </MenuItem>
        </li>
      ))}
    </ul>
  );
};

export default MenuList;
