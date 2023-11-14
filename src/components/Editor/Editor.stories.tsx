import GwkEditor from "./Editor";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Editor",
  component: GwkEditor,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {},
} satisfies Meta<typeof GwkEditor>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { value: "", type: "html" },
};
