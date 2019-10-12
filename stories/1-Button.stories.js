import { html } from "./utils/editor";
import { radios, boolean, withKnobs, text } from "@storybook/addon-knobs";
import Centered from "@storybook/addon-centered/vue";
import VsButton from "../src/components/VsButton";

export default {
  title: "vs-button",
  component: VsButton,
  decorators: [withKnobs, Centered]
};

export const allPropsInteractive = () => ({
  props: {
    size: {
      default: radios(
        "size",
        {
          small: "small",
          normal: "normal"
        },
        "normal"
      )
    },
    type: {
      default: radios(
        "type",
        {
          primary: "primary",
          secondary: "secondary",
          danger: "danger"
        },
        "secondary"
      )
    },
    loading: {
      default: boolean("loading", false)
    },
    disabled: {
      default: boolean("disabled", false)
    },
    slotValue: {
      default: text("slotValue", "default button")
    }
  },
  template: html`
    <vs-theme-provider>
      <vs-button
        v-bind:size="size"
        :type="type"
        :loading="loading"
        :disabled="disabled"
        >{{slotValue}}</vs-button
      >
    </vs-theme-provider>
  `
});
