import PasswordField from "./PasswordField";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Fields/PasswordField",
  component: PasswordField,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    placeholder: {
      control: "text",
    },
    onClick: {},
  },
} satisfies Meta<typeof PasswordField>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY

export const Default: Story = {
  args: {
    placeholder: "Categoría",
  },
};
