import { InputWithButton } from "@ui/forms";
import ReturnTab from "./ReturnTab";
import type { Meta, StoryObj } from "@storybook/react";
import { ProfileTab } from "@ui/nav";
import { Link } from "react-router-dom";
import { withRouter } from "storybook-addon-react-router-v6";
import { Find } from "@ui/icons";
import userExample from "@ui/assets/userExample.svg";

const meta = {
  title: "nav/ReturnTab",
  component: ReturnTab,
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
} satisfies Meta<typeof ReturnTab>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY
export const Default: Story = {
  args: {
    withButton: true,
    children: "Volver al panel de control",
    to: "/",
  },
};
export const WithoutText: Story = {
  args: {
    withButton: true,
    to: "/",
  },
};

export const WithoutButton: Story = {
  args: {
    withButton: false,
    to: "/",
    children: (
      <Link to="/" className="gwk-text-big">
        Volver al panel de control
      </Link>
    ),
  },
};

export const WithProfileTypeSearch: Story = {
  args: {
    withButton: true,
    to: "/",
    separator: false,
    children: (
      <ProfileTab
        isLogged={true}
        user={{ id: "0", name: "john doe", avatar: userExample }}
      >
        <InputWithButton onClick={() => {}} placeholder="Buscar temas" fluid>
          <Find className="gwk-h-8 gwk-w-8" />
        </InputWithButton>
      </ProfileTab>
    ),
  },
};

export const WithProfileAndText: Story = {
  args: {
    withButton: true,
    to: "/",
    separator: false,
    children: (
      <ProfileTab
        isLogged
        onClick={() => {}}
        user={{
          avatar: "/src/assets/userExample.svg",
          id: "0",
          name: "jhon doe",
        }}
      >
        <div className=" gwk-text-left">
          😊 Estás creando un nuevo tema 👏, estás ayudando a la comunidad de
          Grawiki 🙏
        </div>
      </ProfileTab>
    ),
  },
};
