import { BotFill, Find, PencilFill } from "@ui/icons";
import StateIcon from "./StateIcon";
import type { Meta, StoryObj } from "@storybook/react";

const icons = { PencilFill, Find, BotFill };
const meta = {
  title: "General/StateIcon",
  component: StateIcon,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "The StateIcon component is used to display an icon with different states (e.g., primary, secondary) and roundness. It allows you to customize the appearance of the icon based on its state.",
      },
    },
  },
  argTypes: {
    state: {
      control: {
        type: "select",
        options: ["primary", "secondary", "ghost", "default", "warning"],
      },
      description:
        "The state or appearance of the icon (e.g., primary, secondary, ghost, default, warning).",
    },
    icon: {
      description:
        "The icon to be displayed. You can provide a ComponentType, string, or ReactElement.",
      options: Object.keys(icons), // An array of serializable values
      mapping: icons, // Maps serializable option values to complex arg values
      control: {
        type: "select", // Type 'select' is automatically inferred when 'options' is defined
        labels: {
          Pencil: "PencilFill",
          Find: "Find",
          Bot: "BotFill",
          Edit: "EditRounded",
        },
      },
    },

    round: {
      control: {
        type: "boolean",
      },
      description: "Determines if the icon should have a rounded shape.",
    },
    className: {
      control: {
        type: "text",
      },
      description:
        "Additional CSS classes to customize the icon style (optional).",
    },
  },
} satisfies Meta<typeof StateIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    state: "primary",
    icon: PencilFill,
  },
};
