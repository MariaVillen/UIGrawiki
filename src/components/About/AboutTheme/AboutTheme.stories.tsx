import AboutTheme from "./AboutTheme";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/About/AboutTheme",
  component: AboutTheme,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "dark" },
    docs: {
      description: {
        component:
          "The `AboutTheme` component provides information about a publication, including details about the writers and reactions. It's designed to display these elements in a visually appealing and informative manner.",
      },
    },
  },
  argTypes: {
    writers: {
      description:
        "The number of writers contributing to the publication. Required",
      control: "number",
    },
    reactions: {
      description:
        "An array of reactions associated with the publication:  {name: string, count: number }[]",
      control: "object",
    },
  },
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
