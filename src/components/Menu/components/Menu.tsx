import { Logo } from "@ui/general";
import { SearchButton, ToggleNotification } from "@ui/forms";
import MenuList from "./MenuList";
import { TCategoryItem } from "@ui/interface/categories";
import { useState } from "react";
import useViewDetection from "@ui/utils/hooks/useViewDetection";

export type TMenuProps = {
  isNotification: boolean;
  onSearch: () => void;
  menuItems: Omit<TCategoryItem, "tags">[];
};

const Menu = ({ isNotification, onSearch, menuItems }) => {
  const { width } = useViewDetection();
  return (
    <nav>
      <Logo type="horizontal" theme="light" />
      <SearchButton
        onClick={() => {
          console.log("seachfunction");
        }}
      />
      <ToggleNotification
        onClick={() => console.log("notificaciones")}
        isActive={isNotification}
      />
      <Menu.List
        menuItems={menuItems}
        variant={width <= 360 ? "horizontal" : "vertical"}
      ></Menu.List>
    </nav>
  );
};

export default Menu;

Menu.List = MenuList;
