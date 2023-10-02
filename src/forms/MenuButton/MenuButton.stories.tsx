import MenuButton from "./MenuButton";
import type { Meta, StoryObj } from "@storybook/react";
import { ControlOutline } from "../../icons";

const meta = {
  title: "Buttons/MenuButton",
  component: MenuButton,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["responsive", "horizontal", "vertical"],
    },
    alt: {
      control: "text",
    },
    children: {
      control: "text",
    },
    reverse: {
      control: "boolean",
    },
    onClick: {
      control: false,
    },
  },
} satisfies Meta<typeof MenuButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY

export const Responsive: Story = {
  args: {
    variant: "responsive",
    icon: ControlOutline,
    alt: "Bot Icon",
    children: "Panel de control",
  },
};

export const Vertical: Story = {
  args: {
    variant: "vertical",
    icon: ControlOutline,
    children: "Panel de control",
  },
};

export const Horizontal: Story = {
  args: {
    variant: "horizontal",
    icon: ControlOutline,
    children: "Panel de control",
  },
};
