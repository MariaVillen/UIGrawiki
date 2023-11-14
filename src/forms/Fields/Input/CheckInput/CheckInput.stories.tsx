import CheckInput from "./CheckInput";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Fields/CheckInput",
  component: CheckInput,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "CheckInput is a customized checkbox input component that can be used in various forms and user interfaces. It provides the ability to add custom CSS classes and additional styles for checkboxes, making it suitable for different design requirements.",
      },
    },
  },
  argTypes: {
    className: {
      description: "Custom CSS classes for styling the checkbox input.",
      control: {
        type: "text",
      },
    },
    checked: {
      description: "Set the initial checked state of the checkbox.",
      control: {
        type: "boolean",
      },
    },
    defaultChecked: {
      table: {
        disable: true,
      },
    },
    disabled: {
      description: "Disable the checkbox input.",
      control: {
        type: "boolean",
      },
    },
    // Add more argTypes as needed.
  },
} satisfies Meta<typeof CheckInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { defaultChecked: false },
};

export const Checked: Story = {
  args: { defaultChecked: true },
};
