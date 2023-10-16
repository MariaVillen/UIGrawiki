import {
  ArrowDown,
  ArrowTop,
  NotificationActiveFill,
  NotificationOutline,
} from "@ui/icons";
import ToggleButton from "./ToggleButton";
import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "@ui/general";

const meta = {
  title: "Buttons/ToggleButton",
  component: ToggleButton,
  tags: ["autodocs"],
  parameters: {
    backgrounds: { default: "ligth" },
  },
  argTypes: {
    onClick: {
      control: false,
    },
    iconTrue: {
      control: false,
    },
    iconFalse: {
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
    iconFalse: <ArrowDown />,
    iconTrue: <ArrowTop />,
    className: "gwk-text-triarty-white",
  },
};

export const Notification = {
  args: {
    ...Default.args,
    iconFalse: (
      <Icon
        elementSrc={NotificationOutline}
        round
        className="gwk-bg-surface-primary gwk-h-8 gwk-w-8 gwk-p-1 hover:gwk-bg-surface-primary-hover "
      />
    ),
    iconTrue: (
      <Icon
        elementSrc={NotificationActiveFill}
        round
        className="gwk-bg-surface-primary gwk-h-8 gwk-w-8 gwk-p-1 hover:gwk-bg-surface-primary-hover "
      />
    ),
    className: "gwk-text-text-white",
  },
};
