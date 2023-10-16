import ReactionButton from "./ReactionButton";
import type { Meta, StoryObj } from "@storybook/react";
import { ThumbsDown3D, ThumbsDownOutline } from "../../../icons";

const meta = {
  title: "Buttons/ReactionButton",
  component: ReactionButton,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "light" },
  },
  argTypes: {
    isSelected: {
      control: "boolean",
    },
    onClick: {},
  },
} satisfies Meta<typeof ReactionButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY

export const WithIcon: Story = {
  args: {
    isSelected: false,
    icon: ThumbsDownOutline,
    iconSelected: ThumbsDown3D,
  },
};
