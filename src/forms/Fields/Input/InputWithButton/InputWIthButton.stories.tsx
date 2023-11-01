import InputWithButton from "./InputWithButton";
import { Button, ToggleButton } from "@ui/forms";
import type { Meta, StoryObj } from "@storybook/react";
import {
  PasswordShowOutline,
  Find,
  PasswordHideOutline,
  PencilFill,
} from "@ui/icons";

const meta = {
  title: "Fields/InputWithButton",
  component: InputWithButton,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "InputWithButton is an input component that includes an input field and an optional button element. It is designed for use in various forms and user interfaces. The component supports customization, including custom CSS classes, fluid layout, and reverse layout. It also provides error handling and color states.",
      },
    },
  },
  argTypes: {
    className: {
      control: {
        type: "text",
      },
      description:
        "Custom CSS classes for styling the input field with a button.",
    },
    children: {
      description: "The content of the button element.",
      control: {
        type: "text",
      },
    },
    reverse: {
      description:
        "Display the button on the opposite side (right) of the input field.",
      control: {
        type: "boolean",
      },
    },
    fluid: {
      description: "Make the input field expand to fill the available space.",
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
    // Add more argTypes as needed.
  },
} satisfies Meta<typeof InputWithButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY

export const Default: Story = {
  args: {
    placeholder: "Category",
  },
};

export const WithIcon: Story = {
  args: {
    ...Default.args,
    children: <Find className="gwk-h-8 gwk-w-8" />,
  },
};

export const WithIconReverse: Story = {
  args: {
    reverse: true,
    placeholder: "Password",
    padding: true,
    children: (
      <Button
        btnType="icon"
        variant="default"
        className="gwk-border-none gwk-bg-transparent"
      >
        <Button.Icon icon={PencilFill} size="medium" />
      </Button>
    ),
  },
};

export const WithToggleButtonReverse: Story = {
  args: {
    reverse: true,
    placeholder: "Password",
    type: "password",
    children: (
      <ToggleButton
        iconTrue={PasswordShowOutline}
        iconFalse={PasswordHideOutline}
        isActive={false}
        className="gwk-w-10 gwk-h-10"
      />
    ),
  },
};

export const ErrorState: Story = {
  args: {
    placeholder: "Category",
    colorState: "error",
  },
};

export const ValidState: Story = {
  args: {
    placeholder: "Category",
    colorState: "valid",
  },
};
