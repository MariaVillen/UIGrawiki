import { ArrowDown, ArrowTop } from "../../../icons";
import ToggleButton from "./ToggleButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Buttons/ToggleButton",
  component: ToggleButton,
  tags: ["autodocs"],
  argTypes: {
    onClick: {
      control: false,
    },
    iconTrue: {
      control: false,
    },
    iconFalse: {
      control: false,
    },
  },
} satisfies Meta<typeof ToggleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY

export const Default: Story = {
  args: {
    isActive: false,
    iconFalse: <ArrowDown />,
    iconTrue: <ArrowTop />,
    className: "gwk-text-triarty-white",
  },
};
