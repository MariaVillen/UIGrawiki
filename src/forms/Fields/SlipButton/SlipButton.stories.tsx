import SlipButton from "./SlipButton";
import type { Meta, StoryObj } from "@storybook/react";
import {
  BankOutline,
  GovernmentOutline,
  HealthOutline,
  ToysOutline,
} from "../../../icons";
import { ComponentType } from "react";

const icons = { ToysOutline, BankOutline, GovernmentOutline, HealthOutline };

const meta = {
  title: "Fields/SlipButton",
  component: SlipButton,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "SlipButton is a selector component that combines an input field with a toggle button to display or hide suggestions. It is designed for use in dropdowns and suggestion selectors. This component provides customization options, including custom CSS classes, icons, and alternate text.",
      },
    },
  },
  argTypes: {
    onToggle: {
      description:
        "Callback function to handle the toggle state of the dropdown.",
      control: {
        type: null, // Omitted because this is a function.
      },
    },
    placeholder: {
      description: "Placeholder text for the SlipButton input field.",
      control: {
        type: "text",
      },
    },
    value: {
      description: "Value for the SlipButton input field.",
      control: {
        type: "text",
      },
    },
    isOpened: {
      description:
        "A boolean indicating whether the dropdown is open or closed.",
      control: {
        type: "boolean",
      },
    },
    className: {
      description: "Custom CSS classes for styling the SlipButton component.",
      control: {
        type: "text",
      },
    },
    alt: {
      description: "Alternate text for the component.",
      control: {
        type: "text",
      },
    },
    icon: {
      description: "The icon to display in the SlipButton",
      options: Object.keys(icons), // An array of serializable values
      mapping: icons, // Maps serializable option values to complex arg values
      control: {
        type: "select", // Type 'select' is automatically inferred when 'options' is defined
        labels: {
          Bank: "BankOutline",
          Toys: "ToysOutline",
          Government: "GovernmentOutline",
          Health: "HealthOutline",
        },
      },
    },
    inputStyles: {
      description: "The styles to apply at the input of the button.",
      control: {
        type: "text",
      },
    },
    // You can add more ArgTypes as needed for additional props.
  },
} satisfies Meta<typeof SlipButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY

export const Default: Story = {
  args: {
    isOpened: false,
    placeholder: "Categoría",
    value: "Normal",
    children: "Suggestion List here",
  },
};

export const WithIcon: Story = {
  args: {
    isOpened: true,
    placeholder: "Categoría",
    value: "Banco",
    icon: BankOutline as ComponentType,
    alt: "Categoría Banco",
    children: "Suggestion List here",
  },
};
