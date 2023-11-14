import type { Meta, StoryObj } from "@storybook/react";
import { CloseRoundedFill } from "../../icons";
import Icon from "./Icon";

const meta = {
  title: "General/Icon",
  component: Icon,

  tags: ["autodocs"],

  argTypes: {
    alt: {
      control: {
        type: "text",
      },
      description: "Alternative text for the image (optional).",
    },
    elementSrc: {
      control: {
        type: "text",
      },
      description: "Source of the image or component to display.",
    },
    fluid: {
      control: {
        type: "boolean",
      },
      description: "Makes the image occupy all available space.",
    },
    round: {
      control: {
        type: "boolean",
      },
      description: "Rounds the shape of the image.",
    },
    className: {
      control: {
        type: "text",
      },
      description:
        "Additional CSS classes to customize the icon's style (optional).",
    },
  },
  parameters: {
    componentSubtitle: "It is a basic Icon",
    docs: {
      description: {
        component:
          "The Icon component is used to display an image or an icon. You can customize the source of the image, alternative text (alt), fluidity (fluid), and roundness (round).",
      },
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    alt: "Close this Modal",
    className:
      " hover:gwk-text-text-white gwk-h-8 hover:gwk-bg-red-500 gwk-w-8 gwk-text-red-500 gwk-bg-white",
    elementSrc: CloseRoundedFill,
  },
};

export const Rounded: Story = {
  args: {
    ...Default,
    elementSrc: CloseRoundedFill,
    className:
      "hover:gwk-text-text-white gwk-h-8 hover:gwk-bg-red-500 gwk-w-8 gwk-text-red-500 gwk-bg-white",
    round: true,
  },
};
