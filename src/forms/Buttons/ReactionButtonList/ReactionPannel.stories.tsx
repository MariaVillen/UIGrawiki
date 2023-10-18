import ReactionPannel from "./ReactionPannel";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Forms/ReactionPannel",
  component: ReactionPannel,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {},
} satisfies Meta<typeof ReactionPannel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: [
      { name: "ThumbsDown", count: 99 },
      { name: "Clapping", count: 3 },
      { name: "ThumbsUp", count: 3 },
    ],
    userReacted: ["Clapping"],
  },
};
