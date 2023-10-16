import { Logo } from "@ui/general";
import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

const meta = {
  title: "General/Logo",
  component: Logo,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  decorators: [withRouter],
  argTypes: {
    theme: {
      control: "radio",
      options: ["light", "dark"],
    },
    type: {
      control: "radio",
      options: ["horizontal", "vertical", "menu", "base"],
    },
    onClick: {
      control: false,
    },
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY
export const Default: Story = {
  parameters: {
    backgrounds: { default: "light" },
  },
  args: {
    type: "base",
    theme: "light",
    className: "gwk-w-20 gwk-h-20",
  },
};

export const Horizontal: Story = {
  parameters: {
    backgrounds: { default: "light" },
  },
  args: {
    ...Default.args,
    type: "horizontal",
  },
};

export const Vertical: Story = {
  parameters: {
    backgrounds: { default: "light" },
  },
  args: {
    ...Default.args,
    type: "vertical",
  },
};

export const HorizontalDark: Story = {
  parameters: {
    backgrounds: { default: "dark" },
  },
  args: {
    ...Default.args,
    theme: "dark",
    type: "horizontal",
  },
};

export const VerticalDark: Story = {
  parameters: {
    backgrounds: { default: "dark" },
  },
  args: {
    ...HorizontalDark.args,
    type: "vertical",
  },
};

export const MenuDark: Story = {
  parameters: {
    backgrounds: { default: "dark" },
  },
  args: {
    ...HorizontalDark.args,
    type: "menu",
  },
};
