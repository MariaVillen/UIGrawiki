import { TCategoryItem } from "@ui/interface/categories";
import { MenuItem } from "@ui/nav";

export type TMenuListProps = {
  menuItems: Omit<TCategoryItem, "tags">[];
  variant: "horizontal" | "vertical" | "responsive";
};

const MenuList = ({ menuItems, variant }: TMenuListProps) => {
  return (
    <ul className="gwk-flex gwk-flex-col gwk-justify-start gwk-gap-5 ">
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
