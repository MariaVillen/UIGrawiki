import AboutWriters from "./AboutWriters";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/AboutWriters",
  component: AboutWriters,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {},
} satisfies Meta<typeof AboutWriters>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    writers: 25,
  },
};

export const WithLastVersion: Story = {
  args: {
    ...Default.args,
    children: (
      <span className="gwk-text-text-disable">Ultima versión 04/10/2023</span>
    ),
  },
};
