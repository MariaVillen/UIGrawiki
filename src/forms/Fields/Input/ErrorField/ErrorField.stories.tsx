import ErrorField from "./ErrorField";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Fields/ErrorField",
  component: ErrorField,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "ErrorField is a component designed to display error messages or notifications in forms or user interfaces. It combines a text message with an alert icon for easy recognition and customization.",
      },
    },
  },
  argTypes: {
    className: {
      description: "Custom CSS classes for styling the error field.",
      control: {
        type: "text",
      },
    },
    children: {
      description:
        "The content or error message to be displayed within the ErrorField.",
      control: {
        type: "text",
      },
    },
    // Add more argTypes as needed.
  },
} satisfies Meta<typeof ErrorField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Hola soy un error",
  },
};

export const Styled: Story = {
  args: {
    children: "Hola soy un error",
    className: "gwk-text-text-negative",
  },
};
