import { ChatMessageUser } from "./ChatMessage";
import type { Meta, StoryObj } from "@storybook/react";
import { userExample } from "@ui/assets";

const meta = {
  title: "Components/Chat/ChatMessage/Customized/ChatMessageUser",
  component: ChatMessageUser,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "Pre-built chat message component for Bot messages.",
      },
    },
  },
  argTypes: {
    avatar: {
      description: "URL of the avatar image associated with the message.",
      control: "text",
    },
    reverse: {
      description:
        "Whether to display the message in reverse order (right-to-left).",
      control: "boolean",
      defaultValue: false,
    },
  },
} satisfies Meta<typeof ChatMessageUser>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    avatar: userExample,
    children: "Buenos días! Qué información necesitas?",
  },
};
