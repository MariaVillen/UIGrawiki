import SlipButton from "./SlipButton";
import type { Meta, StoryObj } from "@storybook/react";
import { BankOutline } from "../../../icons";
import { ComponentType } from "react";

const meta = {
  title: "Fields/SlipButton",
  component: SlipButton,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    fluid: {
      control: "boolean",
    },
    value: {
      control: "string",
    },
    isOpened: {
      control: "boolean",
    },
    placeholder: {
      control: "text",
    },
    onClick: {},
  },
} satisfies Meta<typeof SlipButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY

export const WithIcon: Story = {
  args: {
    placeholder: "Categoría",
    value: "Banco",
    icon: BankOutline as ComponentType,
    alt: "Categoría Banco",
  },
};
