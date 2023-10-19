import ChatMessage from "./ChatMessage";
import type { Meta, StoryObj } from "@storybook/react";
import { BaseLogo } from "@ui/assets";
import userExample from "@ui/assets/userExample.svg";

const meta = {
  title: "Components/Chat/ChatMessage",
  component: ChatMessage,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {},
} satisfies Meta<typeof ChatMessage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    avatar: userExample,
    reverse: true,
    children: "Buenos días! Qué información necesitas?",
    messageStyles: "gwk-bg-surface-primary gwk-text-text-white",
  },
};

export const Response: Story = {
  args: {
    avatar: BaseLogo,
    reverse: false,
    children: "Buenos días! Qué información necesitas?",
    messageStyles: "gwk-bg-surface-triarty-hover gwk-text-text-black",
  },
};

export const WhitoutAvatar: Story = {
  args: {
    reverse: false,
    children: "Buenos días! Qué información necesitas?",
    messageStyles: "gwk-bg-surface-triarty-hover gwk-text-text-black",
  },
};
