import CheckInput from "./CheckInput";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Fields/CheckInput",
  component: CheckInput,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {},
} satisfies Meta<typeof CheckInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { defaultChecked: true },
};
