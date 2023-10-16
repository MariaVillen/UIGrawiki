import ErrorField from "./ErrorField";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Fields/ErrorField",
  component: ErrorField,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "light" },
  },
  argTypes: {},
} satisfies Meta<typeof ErrorField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Hola soy un error",
  },
};
