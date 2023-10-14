import TagButton from "./TagButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Buttons/TagButton",
  component: TagButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onClick: {
      control: false,
    },
  },
} satisfies Meta<typeof TagButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY
export const Default: Story = {
  args: {
    children: "Mercado",
  },
};

export const WithTypeArrow: Story = {
  args: {
    children: "Ver más",
    type: "arrow",
    withHash: false,
  },
};

export const IpButtonTag: Story = {
  args: {
    children: "03/06/2023 08:09  IP.192.228.17.57",
    withHash: false,
  },
};
