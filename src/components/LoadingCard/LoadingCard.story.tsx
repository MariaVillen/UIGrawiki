import LoadingCard from "./LoadingCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/LoadingCard",
  component: LoadingCard,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "dark" },
  },
  argTypes: {},
} satisfies Meta<typeof LoadingCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Logged: Story = {
  args: { isLogged: false },
};

export const NotLogged: Story = {
  args: { isLogged: true },
};
