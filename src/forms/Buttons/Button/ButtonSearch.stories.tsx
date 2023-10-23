import { SearchButton } from "./Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Buttons/Button/SearchButton",
  component: SearchButton,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A search pre-styled button component for performing search actions.",
      },
    },
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["primary", "secondary", "ghost", "default"],
      },

      defaultValue: "ghost",
      description: "Button style variant.",
    },
    size: {
      control: {
        type: "select",
        options: ["big", "medium", "normal", "small"],
      },
      defaultValue: "normal",
      description: "Button size.",
    },
    btnType: {
      table: { disable: true },
    },
    fluid: {
      table: { disable: true },
    },
    children: {
      table: { disable: true },
    },
    className: { table: { disable: true } },
  },
} satisfies Meta<typeof SearchButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: "gwk-text-text-black",
  },
};
