import BaseInput from "./BaseInput";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Fields/BaseInput",
  component: BaseInput,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    parameters: {
      docs: {
        description: {
          component:
            "BasicInput is a simple input component that can be used in forms and user interfaces. It provides the ability to add custom styling classes and control its width, making it versatile for various design needs.",
        },
      },
    },
  },
  argTypes: {
    className: {
      description: "Custom CSS classes for styling the input field.",
      control: {
        type: "text",
      },
    },
    fluid: {
      description: "Make the input field expand to fill the available space.",
      control: {
        type: "boolean",
      },
    },
    value: {
      controle: {
        type: "text",
      },
      description: "The value of the input.",
    },
    placeholder: {
      description: "Placeholder text displayed in the input field.",
      control: {
        type: "text",
      },
    },
    // Add more argTypes as needed.
    onClick: { control: "disable" },
  },
} satisfies Meta<typeof BaseInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY

export const Default: Story = {
  args: {
    placeholder: "Categoría",
    value: "Banco",
  },
};
