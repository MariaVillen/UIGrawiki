import ViewTab from "./ViewTab";
import type { Meta, StoryObj } from "@storybook/react";
import CategoryLabel from "@ui/general/CategoryLabel/CategoryLabel";
import { BankFill } from "@ui/icons";
import { withRouter } from "storybook-addon-react-router-v6";

const meta = {
  title: "nav/ViewTab",
  component: ViewTab,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    background: "dark",
  },
  decorators: [withRouter],
  argTypes: {
    onClick: {
      control: false,
    },
  },
} satisfies Meta<typeof ViewTab>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY
export const Default: Story = {
  args: {
    isListView: false,
    children: <CategoryLabel icon={BankFill} text="Banco" size="big" />,
  },
};

export const WithText: Story = {
  args: {
    isListView: false,
    children: <span>😊Hemos encontrado lo siguiente:</span>,
  },
};

export const WithoutButtons: Story = {
  args: {
    isListView: false,
    withButtons: false,
    setViewTo: (type: boolean) => {
      console.log(type);
    },
    children: <CategoryLabel icon={BankFill} text="Banco" size="big" />,
  },
};
