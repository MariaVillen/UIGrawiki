import { Logo } from "@ui/general";
import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

const meta = {
  title: "General/Logo",
  component: Logo,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "The Logo component is used to display a logo. It allows you to choose between different logo types and themes (dark or light).",
      },
    },
  },
  decorators: [withRouter],
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["horizontal", "vertical", "menu", "base"],
      },
      description:
        "The type of logo to display (horizontal, vertical, menu, or base).",
    },
    theme: {
      control: {
        type: "select",
        options: ["dark", "light"],
      },
      description: "The theme of the logo (dark or light).",
    },
    className: {
      control: {
        type: "text",
      },
      description:
        "Additional CSS classes to customize the logo style (optional).",
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
