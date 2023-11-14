import { withRouter } from "storybook-addon-react-router-v6";
import Card from "./Card";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  decorators: [withRouter],
  argTypes: {},
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NotLoggedAndOpen: Story = {
  args: {
    id: "1",
    subtitle: "Banco",
    title: "Moneda de circulación",
    lastVersion: "25/10/2023",
    writersQuantity: 25,
    isOpen: true,
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam possimus earum sapiente sunt facere doloremque, architecto debitis officia, necessitatibus corporis corrupti placeat. Ad nisi voluptatem doloremque dolorum minus perferendis. EsseIllo recusandae eaque quod nulla, asperiores nisi esse quibusdam error laborum vero necessitatibus hic consectetur labore. Commodi deserunt, voluptas eaque impedit quasi repellat nisi sed cupiditate, laudantium, in porro sunt!Temporibus dolore reprehenderit similique ab dolores incidunt molestiae? Voluptate quod ullam eveniet excepturi expedita. Totam, nobis beatae possimus veritatis voluptas esse? Omnis dolorum accusantium iure aut nam doloremque placeat exercitationem!Fugiat minima tempora sint ex doloribus, corporis recusandae deleniti nam eum quibusdam! Assumenda nesciunt voluptas dolores rem doloribus earum, nemo dolore excepturi distinctio quae tempora blanditiis veniam quas illum vitae.Explicabo ut et optio perferendis numquam molestias nobis, obcaecati dignissimos nemo placeat est inventore repellendus veniam officia saepe dicta culpa praesentium nihil ullam sed quibusdam vero. Reiciendis nesciunt voluptas accusamus?",
    reactions: [
      { name: "ThumbsDown", count: 99 },
      { name: "Clapping", count: 3 },
      { name: "ThumbsUp", count: 3 },
    ],
    userReaction: "Clapping",
    onDelete: () => console.log("delete"),
    onEdit: () => console.log("Edit"),
    tags: [
      "moneda",
      "mercado",
      "banco",
      "finanzas",
      "exportaciones",
      "precios",
    ],
    isLogged: false,
  },
};

export const NotLoggedAndClosed: Story = {
  args: {
    ...NotLoggedAndOpen.args,
    isLogged: false,
    isOpen: false,
  },
};

export const LoggedAndOpen: Story = {
  args: {
    ...NotLoggedAndOpen.args,
    isLogged: true,
    isOpen: true,
  },
};

export const LoggedAndClosed: Story = {
  args: {
    ...NotLoggedAndOpen.args,
    isLogged: true,
    isOpen: false,
  },
};
