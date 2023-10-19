import AboutTheme from "./AboutTheme";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/About/AboutTheme",
  component: AboutTheme,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {},
} satisfies Meta<typeof AboutTheme>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    writers: 25,
    reactions: [
      { name: "ThumbsUp", count: 99 },
      { name: "Clapping", count: 3 },
      { name: "ThumbsDown", count: 3 },
      { name: "Pinched", count: 1 },
    ],
  },
};
