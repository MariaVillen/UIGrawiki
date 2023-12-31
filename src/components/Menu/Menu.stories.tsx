import {
  BankFill,
  BankOutline,
  GovernmentFill,
  GovernmentOutline,
  HealthFill,
  HealthOutline,
  ToysFill,
  ToysOutline,
} from "@ui/icons";
import Menu from "./Menu";
import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

const meta = {
  title: "Components/Menu/Menu",
  component: Menu,
  tags: ["autodocs"],
  decorators: [withRouter],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof Menu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    menuItems: [
      {
        id: "1",
        icon: BankOutline,
        iconActive: BankFill,
        text: "Banco",
        link: "/category/banco",
      },
      {
        id: "2",
        icon: HealthOutline,
        iconActive: HealthFill,
        text: "Salud",
        link: "/category/salud",
      },
      {
        id: "3",
        icon: GovernmentOutline,
        iconActive: GovernmentFill,
        text: "Gobierno",
        link: "/category/gobierno",
      },
      {
        id: "4",
        icon: ToysOutline,
        iconActive: ToysFill,
        text: "Juguetes",
        link: "/category/Juguetes",
      },
    ],
    isLogged: false,
    isNotification: false,
    onSearch: () => {
      console.log("search");
    },
  },
};

export const DesktopLogged: Story = {
  args: {
    ...Default.args,
    isLogged: true,
  },
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile",
    },
  },
  args: {
    ...Default.args,
  },
};
export const MobileLogged: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile",
    },
  },
  args: {
    ...Default.args,
    isLogged: true,
  },
};
