import MenuNavButton from "./MenuNavButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Menu/MenuNavButton",
  component: MenuNavButton,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {},
} satisfies Meta<typeof MenuNavButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
export const Open: Story = {
  args: { isActive: true },
};
