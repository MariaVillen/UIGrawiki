import TagButton from "./TagButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "General/TagButton",
  component: TagButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onClick: {
      control: false,
    },
  },
} satisfies Meta<typeof TagButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY
export const Default: Story = {
  args: {
    children: "Mercado",
  },
};
