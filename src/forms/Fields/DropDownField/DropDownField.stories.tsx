import { DropDownField } from "@ui/forms";
import type { Meta, StoryObj } from "@storybook/react";
import { TCategoryItem } from "@ui/interface/categories";
import { categoryList } from "@ui/interface/categories";

import CategoryLabel from "@ui/general/CategoryLabel/CategoryLabel";

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
    options: categoryList,
    indexChamp: "text",
    iconChamp: "icon",
    placeholder: "Categorias",
    component: (elem: unknown) => {
      const { icon, text } = elem as TCategoryItem;
      return <CategoryLabel icon={icon} text={text} size={"normal"} />;
    },
  },
  // Resto de las configuraciones...
};
