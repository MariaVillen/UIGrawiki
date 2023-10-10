import { DropDownField } from "@ui/forms";
import type { Meta, StoryObj } from "@storybook/react";
import { TCategoryItem } from "@ui/interface/categories";
import {
  HealthOutline,
  ToysOutline,
  BankOutline,
  GovernmentOutline,
} from "@ui/icons";
import { Icon } from "@ui/general";

const data: Array<TCategoryItem> = [
  {
    id: "1",
    icon: HealthOutline,
    text: "Salud",
    link: "/category/health",
    tags: ["9", "13"],
  },
  {
    id: "2",
    icon: ToysOutline,
    text: "Juguetes",
    link: "/category/Toys",
    tags: ["10", "11", "12"],
  },
  {
    id: "3",
    icon: BankOutline,
    text: "Bancos",
    link: "/category/banks",
    tags: ["1", "3", "4", "5", "6", "7", "8"],
  },
  {
    id: "4",
    icon: GovernmentOutline,
    text: "Gobierno",
    link: "/category/government",
    tags: ["1", "2", "8"],
  },
];

const meta = {
  title: "Fields/DropDownField",
  component: DropDownField,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    onClick: {
      control: false,
    },
  },
} satisfies Meta<typeof DropDownField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: ["Pequeño", "Regular", "Medio"],
    placeholder: "Tamaño",
  },
};

export const Objects: Story = {
  args: {
    options: data,
    placeholder: "Categorias",
    component: (elem: unknown) => {
      const { icon, text } = elem as TCategoryItem;
      return (
        <>
          <Icon elementSrc={icon} />
          {text}
        </>
      );
    },
  },
  // Resto de las configuraciones...
};
