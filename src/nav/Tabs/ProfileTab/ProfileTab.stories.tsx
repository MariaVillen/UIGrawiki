import { InputWithButton } from "@ui/forms";
import ProfileTab from "./ProfileTab";
import type { Meta, StoryObj } from "@storybook/react";
import { Find } from "@ui/icons";
import userExample from "@ui/assets/userExample.svg";

const meta = {
  title: "nav/ProfileTab",
  component: ProfileTab,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    background: "dark",
  },
  argTypes: {
    onClick: {
      control: false,
    },
  },
} satisfies Meta<typeof ProfileTab>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY
export const Default: Story = {
  args: { isLogged: false },
};

export const IsLogged: Story = {
  args: { isLogged: true },
};

export const WithSearchBar: Story = {
  args: {
    isLogged: true,
    user: {
      id: "0",
      name: "jhon doe",
      avatar: userExample,
    },
    children: (
      <InputWithButton onClick={() => {}} placeholder="Buscar temas" fluid>
        <Find className="gwk-h-8 gwk-w-8" />
      </InputWithButton>
    ),
  },
};

export const WithText: Story = {
  args: {
    isLogged: true,
    user: {
      id: "0",
      name: "jhon doe",
      avatar: userExample,
    },
    children:
      "😊 Estás creando un nuevo tema 👏, estás ayudando a la comunidad de Grawiki 🙏 ",
  },
};

export const WithBigText: Story = {
  args: {
    isLogged: false,
    user: {
      id: "0",
      name: "jhon doe",
      avatar: userExample,
    },
    children: (
      <div className="gwk-text-big gwk-font-bold gwk-text-center">Perfil</div>
    ),
  },
};

export const MobileWithText: Story = {
  parameters: {
    viewport: { defaultViewport: "mobile" },
  },
  args: {
    isLogged: true,
    user: {
      id: "0",
      name: "jhon doe",
      avatar: userExample,
    },
    children:
      "😊 Estás creando un nuevo tema 👏, estás ayudando a la comunidad de Grawiki 🙏 ",
  },
};
