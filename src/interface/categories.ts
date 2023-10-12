import { ComponentType, ReactElement } from "react";

// Define el tipo genérico para los elementos en options
export type TCategoryItem = {
  id: string;
  icon: ComponentType | string | ReactElement;
  text: string;
  link: string;
  tags: string[];
};
