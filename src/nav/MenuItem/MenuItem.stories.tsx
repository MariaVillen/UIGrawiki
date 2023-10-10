import MenuItem from "./MenuItem";
import type { Meta, StoryObj } from "@storybook/react";
import { ControlFill, ControlOutline } from "../../icons";
import { withRouter } from "storybook-addon-react-router-v6";

const meta = {
  title: "Nav/MenuItem",
  component: MenuItem,
  tags: ["autodocs"],
  decorators: [withRouter],
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
} satisfies Meta<typeof MenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY

export const Responsive: Story = {
  args: {
    variant: "responsive",
    isActive: false,
    icon: ControlOutline,
    iconActive: ControlFill,
    alt: "Bot Icon",
    children: "Panel de control",
    to: "/control",
  },
};

export const Vertical: Story = {
  args: {
    variant: "vertical",
    isActive: true,
    icon: ControlOutline,
    iconActive: ControlFill,
    children: "Panel de control",
    to: "/control",
  },
};

export const Horizontal: Story = {
  args: {
    variant: "horizontal",
    isActive: false,
    icon: ControlOutline,
    iconActive: ControlFill,
    children: "Panel de control",
    to: "/control",
  },
};
