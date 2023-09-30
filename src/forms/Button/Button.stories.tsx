import Button from "./Button";
import type { Meta, StoryObj } from "@storybook/react";
import { CloseTag } from "../../icons";

const meta = {
  title: "Buttons/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["default", "primary", "secondary", "disabled"],
    },
    size: {
      control: "radio",
      options: ["small", "normal", "medium", "big"],
    },
    fluid: {
      control: "boolean",
    },
    onClick: {
      control: false,
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY

export const Default: Story = {
  args: {
    variant: "default",
    size: "normal",
    children: "Botón",
    fluid: false,
  },
};

export const Icon: Story = {
  args: {
    variant: "primary",
    size: "small",
    btnType: "icon",
    children: <CloseTag />,
  },
};
