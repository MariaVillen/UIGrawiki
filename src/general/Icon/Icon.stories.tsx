import type { Meta, StoryObj } from "@storybook/react";
import { CloseRoundedFill } from "../../icons";
import Icon from "./Icon";

const meta = {
  title: "General/Icon",
  component: Icon,

  tags: ["autodocs"],

  argTypes: {
    className: {
      control: "text",
    },
    alt: {
      control: "text",
      description: "An alternative text to the component",
    },
    round: {
      control: "boolean",
    },
  },

  parameters: {
    componentSubtitle: "It is a basic Icon",
    backgrounds: { default: "light" },
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
