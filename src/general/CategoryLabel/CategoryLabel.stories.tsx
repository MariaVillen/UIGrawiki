import CategoryLabel from "./CategoryLabel";
import type { Meta, StoryObj } from "@storybook/react";
import { BankOutline } from "@ui/icons";
import { ComponentType } from "react";

const meta = {
  title: "General/CategoryLabel",
  component: CategoryLabel,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "light" },
  },
  argTypes: {
    text: {
      control: "text",
    },
    alt: {
      control: "text",
    },
    icon: {
      control: "text",
    },
    onClick: {},
  },
} satisfies Meta<typeof CategoryLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY

export const WithIcon: Story = {
  args: {
    text: "Banco",
    icon: BankOutline as ComponentType,
  },
};
