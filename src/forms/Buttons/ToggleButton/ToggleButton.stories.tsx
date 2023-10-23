import { ArrowDown, ArrowTop } from "@ui/icons";
import ToggleButton from "./ToggleButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Buttons/ToggleButton",
  component: ToggleButton,
  tags: ["autodocs"],
  parameters: {
    backgrounds: { default: "ligth" },
    docs: {
      description: {
        component:
          "A versatile ToggleButton component for toggling between two states.",
        // You can add additional details here about usage, props, etc.
      },
    },
  },
  argTypes: {
    isActive: {
      control: "boolean",
      description: "Whether the button is in the active state.",
    },
    iconFalse: {
      control: {
        type: "select",
        options: ["ArrowDown", "NotificationOutline"],
      },
      description:
        "Icon to display when the button is in the false (inactive) state.",
    },
    iconTrue: {
      control: {
        type: "select",
        options: ["ArrowTop", "NotificationActiveFill"],
      },
      description:
        "Icon to display when the button is in the true (active) state.",
    },
    iconStyles: {
      control: "text",
      description: "Additional CSS styles for the icon element.",
    },
    className: {
      control: "text",
      description: "Additional CSS classes for styling purposes.",
    },
    onClick: {
      control: false,
    },
  },
} satisfies Meta<typeof ToggleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY

export const Default: Story = {
  args: {
    isActive: false,
    iconFalse: ArrowDown,
    iconTrue: ArrowTop,
  },
};
