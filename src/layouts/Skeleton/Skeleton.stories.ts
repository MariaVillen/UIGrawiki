import Skeleton from "./Skeleton";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Layouts/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "dark" },
  },
  argTypes: {
    shape: {
      control: "radio",
      options: ["circle", "rectangle"],
    },
    width: {
      control: "text",
    },

    height: {
      control: "text",
    },
    onClick: {
      control: false,
    },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY

export const Circle: Story = {
  args: {
    shape: "circle",
    width: "22px",
    height: "22px",
  },
};

export const Rectangle: Story = {
  args: {
    shape: "rectangle",
    width: "200px",
    height: "22px",
  },
};
