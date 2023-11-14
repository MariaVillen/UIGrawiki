import { PasswordField } from "@ui/forms";
import FieldGroup from "./FieldGroup";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "`Fields/FieldGroup",
  component: FieldGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {},
} satisfies Meta<typeof FieldGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    error: "El campo es obligatorio",
    children: <PasswordField />,
  },
};
