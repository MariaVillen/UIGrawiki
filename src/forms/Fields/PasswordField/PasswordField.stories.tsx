import PasswordField from "./PasswordField";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Fields/PasswordField",
  component: PasswordField,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "PasswordField is an input component designed for password input fields. It allows users to toggle the visibility of the password with a show/hide button. This component integrates the `InputWithButton` and `ToggleButton` components for password handling.",
      },
    },
  },
  argTypes: {
    className: {
      description: "Custom CSS classes for styling the password field.",
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
    reverse: {
      description: "If true, change the place of the icon to left.",
      control: {
        type: "boolean",
      },
    },
    colorState: {
      description:
        "Change color states for the input field (error | valid | null).",
      control: {
        type: "select",
        options: ["error", "valid", null],
      },
      defaultValue: null,
    },
    placeholder: {
      description: "Placeholder text displayed in the input field.",
      control: {
        type: "text",
      },
    },
    padding: {
      control: "boolean",
      description: "Add a padding to the right and left side of the input",
    },
  },
} satisfies Meta<typeof PasswordField>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY

export const Default: Story = {
  args: {
    placeholder: "Categoría",
  },
};
