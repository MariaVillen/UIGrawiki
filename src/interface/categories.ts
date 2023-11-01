import {
  BankFill,
  BankOutline,
  GovernmentFill,
  GovernmentOutline,
  HealthFill,
  HealthOutline,
  ToysFill,
  ToysOutline,
} from "@ui/icons";
import { ComponentType, ReactElement } from "react";

// Define el tipo genérico para los elementos en options
export type TCategoryItem = {
  id: string;
  icon: ComponentType | string | ReactElement;
  iconActive: ComponentType | string | ReactElement;
  text: string;
  link: string;
  tags: string[];
};

/** Example data */

export const categoryList: Array<TCategoryItem> = [
  {
    id: "1",
    icon: HealthOutline,
    iconActive: HealthFill,
    text: "Salud",
    link: "/category/health",
    tags: ["9", "13"],
  },
  {
    id: "2",
    icon: ToysOutline,
    iconActive: ToysFill,
    text: "Juguetes",
    link: "/category/Toys",
    tags: ["10", "11", "12"],
  },
  {
    id: "3",
    icon: BankOutline,
    iconActive: BankFill,
    text: "Bancos",
    link: "/category/banks",
    tags: ["1", "3", "4", "5", "6", "7", "8"],
  },
  {
    id: "4",
    icon: GovernmentOutline,
    iconActive: GovernmentFill,
    text: "Gobierno",
    link: "/category/government",
    tags: ["1", "2", "8"],
  },
];
