import Alert from "./Alert";
import type { Meta, StoryObj } from "@storybook/react";
import { CorrectState, GeneralErrorState, ValidatingState } from "@ui/assets";

const meta = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: {
      default: "dark",
    },
  },
  argTypes: {},
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "custom",
    label: "Tema Creado",
    image: CorrectState,
    alt: "Tema creado correctamente",
    text: "Se ha creado su tema con éxito. Ahora la comunidad puede leerlo y editarlo.",
    buttonLabel: "Ver tema creado",
  },
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile",
    },
    layout: "fullscreen",
  },
  args: {
    ...Default.args,
  },
};

export const Warning: Story = {
  args: {
    label: "Se está verificando su publicación",
    image: ValidatingState,
    alt: "Tema en proceso de verificación",
    text: "En cuanto su publicación sea revisada se le avisará.",
    buttonLabel: "Volver a temas",
    variant: "warning",
  },
};

export const Error: Story = {
  args: {
    label: "No se ha podido publicar el tema",
    image: GeneralErrorState,
    alt: "Error al publicar",
    text: "Le recomendamos reintentar para poder publicar su tema.",
    buttonLabel: "Reintentar",
    variant: "secondary",
  },
};

export const CorrectEdit: Story = {
  args: {
    variant: "custom",
    label: "Tema editado",
    image: CorrectState,
    alt: "Tema editado con éxito.",
    text: "Se ha editado su tema con éxito.",
    buttonLabel: "Ver tema editado",
  },
};

export const ErrorEdit: Story = {
  args: {
    label: "No se ha podido editar el tema",
    image: GeneralErrorState,
    alt: "Error al publicar la edición",
    text: "Le recomendamos reintentar para poder publicar su tema.",
    buttonLabel: "Reintentar",
    variant: "secondary",
  },
};
