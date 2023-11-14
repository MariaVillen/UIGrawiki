import RichEditor from "./RichEditor";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Editors/RichEditor",
  component: RichEditor,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {},
} satisfies Meta<typeof RichEditor>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
