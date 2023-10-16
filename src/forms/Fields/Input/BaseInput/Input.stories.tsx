import BaseInput from "./BaseInput";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Fields/BaseInput",
  component: BaseInput,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "light" },
  },
  argTypes: {
    placeholder: {
      control: "text",
    },
    onClick: {},
  },
} satisfies Meta<typeof BaseInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY

export const Default: Story = {
  args: {
    placeholder: "Categoría",
    value: "Banco",
    alt: "Categoría Banco",
  },
};
