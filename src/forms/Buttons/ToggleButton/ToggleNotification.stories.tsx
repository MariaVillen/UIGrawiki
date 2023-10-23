import { ToggleNotification } from "./ToggleButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Buttons/ToggleButton/ToggleNotification",
  component: ToggleNotification,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {},
} satisfies Meta<typeof ToggleNotification>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { isActive: false },
};
