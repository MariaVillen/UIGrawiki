import Avatar from "./Avatar";
import type { Meta, StoryObj } from "@storybook/react";
import userExample from "../../assets/userExample.svg";
const meta = {
  title: "General/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    disable: {
      control: "boolean",
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
    alt: {
      control: "text",
    },
    image: {},
    onClick: {
      control: false,
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY

export const WithImage: Story = {
  args: {
    disable: false,
    size: "sm",
    alt: "User",
    image: userExample,
  },
};

export const DefaultAvatar: Story = {
  args: {
    disable: false,
    size: "sm",
    alt: "User",
  },
};
