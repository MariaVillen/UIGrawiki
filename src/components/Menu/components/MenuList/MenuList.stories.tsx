import MenuList from "./MenuList";
import type { Meta, StoryObj } from "@storybook/react";

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
import { withRouter } from "storybook-addon-react-router-v6";

const meta = {
  title: "Components/Menu/MenuList",
  component: MenuList,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  decorators: [withRouter],
  argTypes: {},
} satisfies Meta<typeof MenuList>;

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
    variant: "horizontal",
  },
};
