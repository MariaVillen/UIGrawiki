import ReactionBar from "./ReactionBar";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "General/ReactionBar",
  component: ReactionBar,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {},
} satisfies Meta<typeof ReactionBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY
export const Default: Story = {
  args: {
    data: [
      { name: "ThumbsUp", count: 99 },
      {
        name: "Clapping",
        count: 3,
      },
      { name: "ThumbsDown", count: 3 },
    ],
  },
};
