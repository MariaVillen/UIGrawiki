import { DropDownField } from "@ui/forms";
import type { Meta, StoryObj } from "@storybook/react";
import {
  HealthOutline,
  ToysOutline,
  BankOutline,
  GovernmentOutline,
} from "@ui/icons";

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
    options: [
      {
        id: "1",
        icon: { HealthOutline },
        text: "Salud",
        link: "/category/health",
        tags: ["9", "13"],
      },
      {
        id: "2",
        icon: { ToysOutline },
        text: "Juguetes",
        link: "/category/Toys",
        tags: ["10", "11", "12"],
      },
      {
        id: "3",
        icon: { BankOutline },
        text: "Bancos",
        link: "/category/banks",
        tags: ["1", "3", "4", "5", "6", "7", "8"],
      },
      {
        id: "4",
        icon: { GovernmentOutline },
        text: "Gobierno",
        link: "/category/government",
        tags: ["1", "2", "8"],
      },
    ],
  },
};
