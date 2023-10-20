import CodeToClipboard from "./CodeToClipboard";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Forms/CodeToClipboard",
  component: CodeToClipboard,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {},
} satisfies Meta<typeof CodeToClipboard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    code: "<CodeToClipboard>{/* Your code Here in string */}</CodeToClipboard>",
  },
};
