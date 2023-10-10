import { ComponentType } from "react";

// Define el tipo genérico para los elementos en options
export type TCategoryItem = {
  id: string;
  icon: ComponentType | string;
  text: string;
  link: string;
  tags: string[];
};
