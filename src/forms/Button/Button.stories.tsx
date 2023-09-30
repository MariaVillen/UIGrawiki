import Button from "./Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Buttons/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
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
