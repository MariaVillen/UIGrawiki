import AuthForm from "./AuthForm";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/AuthForm",
  component: AuthForm,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {},
} satisfies Meta<typeof AuthForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
