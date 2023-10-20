import type { Preview } from "@storybook/react";
import "../src/styles/index.css";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { MY_VIEWPORTS } from "./myViewports";
import { withRouter } from "storybook-addon-react-router-v6";

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: MY_VIEWPORTS,
    },
    backgrounds: {
      default: "dark",
      values: [
        {
          name: "dark",
          value: "#10162F",
        },
        {
          name: "light",
          value: "#ffffff",
        },
        {
          name: "gray",
          value: "#888888",
        },
      ],
    },
    decorators: [withRouter],
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
