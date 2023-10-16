import { Tag } from "@ui/general";
import ListScrollContainer from "./ListScrollContainer";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Layouts/ListScrollContainer",
  component: ListScrollContainer,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    onClick: {
      control: false,
    },
  },
} satisfies Meta<typeof ListScrollContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY
export const TagContainer: Story = {
  args: {
    data: [
      "moneda",
      "mercado",
      "banco",
      "finanzas",
      "exportaciones",
      "precios",
    ],
    component: (elem: unknown) => <Tag withHash>{elem as string}</Tag>,
  },
};

export const HistoryRevision: Story = {
  args: {
    title: "Historial de Revisiones",
    data: [
      { date: "03/06/2023 08:09", ip: "IP.192.228.17.57" },
      { date: "12/09/2023 14:22", ip: "IP.203.45.78.102" },
      { date: "25/11/2023 10:37", ip: "IP.172.31.56.94" },
      { date: "03/06/2023 08:09", ip: "IP.192.228.17.57" },
      { date: "12/09/2023 14:22", ip: "IP.203.45.78.102" },
    ],
    component: (elem: unknown) => {
      const { date, ip } = elem as { date: string; ip: string };
      const revisionTag = (
        <>
          <span>{date}</span>
          <span className="gwk-pl-2">{ip}</span>
        </>
      );
      return (
        <Tag withHash={false} className="gwk-whitespace-nowrap">
          {revisionTag}
        </Tag>
      );
    },
  },
};
