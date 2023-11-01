import Avatar from "./Avatar";
import type { Meta, StoryObj } from "@storybook/react";
import userExample from "../../assets/userExample.svg";
const meta = {
  title: "General/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "The Avatar component displays a user avatar. It allows you to set an image, alt text, size, and disable it if needed.",
      },
    },
  },
  argTypes: {
    image: {
      control: {
        type: "text",
      },
      description: "The image URL for the avatar.",
    },
    alt: {
      control: {
        type: "text",
      },
      description: "The alternative text for the avatar image.",
    },
    size: {
      control: {
        type: "select",
        options: ["sm", "md", "lg"],
      },
      description: "The size of the avatar.",
    },
    disable: {
      control: {
        type: "boolean",
      },
      description: "Set to true to disable the avatar.",
    },
    defaultVariants: {
      table: {
        disable: true,
      },
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
