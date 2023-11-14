import Review from "./Review";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Review",
  component: Review,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {},
} satisfies Meta<typeof Review>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    writers: 25,
    lastVersion: "10/04/2023",
  },
};
