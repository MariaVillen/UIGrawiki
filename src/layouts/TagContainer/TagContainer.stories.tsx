import { Tag } from "@ui/general";
import TagContainer from "./TagContainer";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Layout/TagContainer",
  component: TagContainer,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onClick: {
      control: false,
    },
  },
} satisfies Meta<typeof TagContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY
export const Default: Story = {
  args: {
    children: (
      <>
        <Tag>Mercado</Tag>
        <Tag>Moneda</Tag>
      </>
    ),
  },
};
