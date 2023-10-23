import ReactionButton from "./ReactionButton";
import type { StoryObj } from "@storybook/react";
import {
  Clapping3D,
  ClappingOutline,
  PinchedFingers3D,
  PinchedFingersOutline,
  ThumbsDown3D,
  ThumbsDownOutline,
  ThumbsUp3D,
  ThumbsUpOutline,
} from "../../../icons";

const icons = {
  ClappingOutline,
  PinchedFingersOutline,
  ThumbsDownOutline,
  ThumbsUpOutline,
};
const iconsSelected = {
  Clapping3D,
  PinchedFingers3D,
  ThumbsDown3D,
  ThumbsUp3D,
};

const meta = {
  title: "Buttons/ReactionButton",
  component: ReactionButton,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "light" },
    docs: {
      description: {
        component:
          "The ReactionButton component is a user interface styled ToggleButton that enables users to express their reactions by selecting from a set of predefined icons. It features a selected state, allowing users to indicate their choice, and supports click interactions for user engagement",
      },
    },
  },
  argTypes: {
    isSelected: {
      control: "boolean",
      description:
        "Whether the button is selected or not. Changes to IconSelected when true",
    },
    icon: {
      description: "The icon when is not active or selected",
      options: Object.keys(icons), // An array of serializable values
      mapping: icons, // Maps serializable option values to complex arg values
      control: {
        type: "select", // Type 'select' is automatically inferred when 'options' is defined
        labels: {
          Clapping: "ClappingOutline",
          Pinched: "PinchedFingersOutline",
          ThumbsDown: "ThumbsDownOutline",
          ThumbsUp: "ThumbsUpOutline",
        },
      },
    },

    iconSelected: {
      description: "The icon when is active or selected",
      options: Object.keys(iconsSelected), // An array of serializable values
      mapping: iconsSelected, // Maps serializable option values to complex arg values
      control: {
        type: "select", // Type 'select' is automatically inferred when 'options' is defined
        labels: {
          Clapping: "Clapping3D",
          Pinched: "PinchedFingers3D",
          ThumbsDown: "ThumbsDown3D",
          ThumbsUp: "ThumbsUp3D",
        },
      },
    },
    iconStyles: {
      description: "The styles apply to the icons",
    },
    onClick: {
      description: "Function to be called when the button is clicked.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY

export const Default: Story = {
  args: {
    isSelected: false,
    icon: ThumbsDownOutline,
    iconSelected: ThumbsDown3D,
  },
};
