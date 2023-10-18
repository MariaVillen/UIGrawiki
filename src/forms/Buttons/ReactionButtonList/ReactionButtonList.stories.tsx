import ReactionButtonList from "./ReactionButtonList";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Buttons/ReactionButtonList",
  component: ReactionButtonList,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "light" },
  },
  argTypes: {},
} satisfies Meta<typeof ReactionButtonList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    userReactions: ["ThumbsUp"],
  },
};
