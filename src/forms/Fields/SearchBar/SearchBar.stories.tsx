import SearchBar from "./SearchBar";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Fields/SearchBar",
  component: SearchBar,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          " SearchBar is a component designed for search input fields. It includes a search button and allows users to input search queries. The component provides customization options, including custom CSS classes, reverse layout, and placeholder text. It is a pre-built InputWithButton component.",
      },
    },
  },
  argTypes: {
    className: {
      description:
        "Custom CSS classes for styling the search input field with a search button.",
      control: {
        type: "text",
      },
    },
    placeholder: {
      description: "Placeholder text for the search input field.",
      control: {
        type: "text",
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
    padding: {
      control: "boolean",
      description: "Add a padding to the right and left side of the input",
    },
    reverse: {
      description:
        "Display the search button on the opposite side (right) of the input field.",
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
    // You can add more ArgTypes as needed for additional props.
  },
} satisfies Meta<typeof SearchBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const ReverseFalse: Story = {
  args: {
    reverse: false,
  },
};
