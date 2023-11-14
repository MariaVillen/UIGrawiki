import { withRouter } from "storybook-addon-react-router-v6";
import LoginForm from "./LoginForm";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/LoginForm",
  component: LoginForm,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  decorators: [withRouter],
  argTypes: {},
} satisfies Meta<typeof LoginForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
