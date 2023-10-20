import MenuListContainer from "./MenuListContainer";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Menu/MenuListContainer",
  component: MenuListContainer,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {},
} satisfies Meta<typeof MenuListContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <ul className="gwk-pt-12">
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
    ),
  },
};
