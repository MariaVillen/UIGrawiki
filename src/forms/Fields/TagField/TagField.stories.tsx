import TagField from "./TagField";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Fields/TagField",
  component: TagField,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    background: "light",
  },
  argTypes: {
    placeholder: {
      control: "text",
    },
    onClick: {},
  },
} satisfies Meta<typeof TagField>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY

export const Default: Story = {
  args: {},
};
