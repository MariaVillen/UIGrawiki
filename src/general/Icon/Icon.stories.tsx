import type { Meta, StoryObj } from "@storybook/react";
import { CloseRoundedFill } from "../../icons";

import Icon from "./Icon";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "General/Icon",
  component: Icon,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    className: {
      control: "text",
    },
    alt: {
      control: "text",
      description: "An alternative text to the component",
    },
  },
  parameters: {
    componentSubtitle: "It is a basic Icon",
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    alt: "Close this Modal",
    elementSrc: CloseRoundedFill,
    className: "gwk-text-white gwk-h-8 gwk-w-8 gwk-radius-50",
  },
};
