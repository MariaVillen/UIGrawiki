import customReaction from "@ui/general/ReactionBar/components/customReactions";
import ReactionButtonList from "./ReactionButtonList";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Buttons/ReactionButtonList",
  component: ReactionButtonList,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "light" },
    docs: {
      description: {
        component:
          "The ReactionButtonList component is a list of reaction buttons that allows users to express their reactions using predefined icons. Each button represents a reaction and can be in an active or inactive state. Users can click on the buttons to select their preferred reaction, which is visually reflected by the change in state.",
      },
    },
  },
  argTypes: {
    reactions: {
      description:
        "An array of reaction objects, each containing a name, icon, and iconActive.",
      control: "disable",
      defaultValue: customReaction,
    },
    className: {
      control: "disable",
      description: "Additional CSS classes for styling purposes.",
    },
    userReaction: {
      control: "text",
      description: "The user's selected reaction by name.",
    },
    onReaction: {
      control: "disable",
      description: "A function to be called when a reaction is clicked.",
    },
  },
} satisfies Meta<typeof ReactionButtonList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    userReaction: "ThumbsUp",
  },
};
