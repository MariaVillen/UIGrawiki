import ReactionBar from "./ReactionBar";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "General/ReactionBar",
  component: ReactionBar,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "The ReactionBar component is used to display a list of reactions with their counts. It receives an array of reactions to display.",
      },
    },
  },
  argTypes: {
    reactions: {
      control: {
        type: "array",
      },
      description:
        "An array of reactions to display, where each reaction includes a name and a count. The type of the reaction elements is: { name: string, count: number },",
    },
  },
} satisfies Meta<typeof ReactionBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY
export const Default: Story = {
  args: {
    reactions: [
      { name: "ThumbsUp", count: 99 },
      {
        name: "Clapping",
        count: 3,
      },
      { name: "ThumbsDown", count: 3 },
    ],
  },
};
