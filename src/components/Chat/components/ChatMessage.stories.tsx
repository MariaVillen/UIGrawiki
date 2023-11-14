import ChatMessage from "./ChatMessage";
import type { Meta, StoryObj } from "@storybook/react";
import { BaseLogo, userExample } from "@ui/assets";

const meta = {
  title: "Components/Chat/ChatMessage",
  component: ChatMessage,

  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "The `ChatMessage` component is used to display chat messages with optional avatars. It provides flexibility for displaying messages in both regular and reverse order.",
      },
      additionalStories: [
        {
          name: "ChatMessageUser",
          args: {
            children: "User message goes here.",
            avatar: userExample,
            messageStyles: "gwk-bg-surface-primary gwk-text-text-white",
            reverse: true,
          },
        },
        {
          name: "ChatMessageBot",
          args: {
            children: "Bot message goes here.",
            avatar: BaseLogo,
            messageStyles: "gwk-bg-surface-triarty-hover gwk-text-text-black",
            reverse: false,
          },
        },
      ],
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
    messageStyles: {
      description: "Additional CSS classes to apply to the message container.",
      control: "text",
    },
  },
} satisfies Meta<typeof ChatMessage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    backgrounds: { default: "dark" },
  },
  args: {
    children: "This is a Chat Message!",
    messageStyles: "gwk-bg-surface-triarty-white",
  },
};

export const MessageWithAvatarLeft: Story = {
  parameters: {
    backgrounds: { default: "dark" },
  },
  args: {
    avatar: BaseLogo,
    reverse: false,
    children: "Buenos días! Qué información necesitas?",
    messageStyles: "gwk-bg-surface-triarty-white",
  },
};

export const MessageWithAvatarRight: Story = {
  parameters: {
    backgrounds: { default: "dark" },
  },
  args: {
    avatar: userExample,
    reverse: true,
    children: "Buenos días! Qué información necesitas?",
    messageStyles: "gwk-bg-surface-triarty-white",
  },
};
