import { html } from "./utils/editor";
import { radios, withKnobs, text } from "@storybook/addon-knobs";
import VsNotification from "../src/components/VsNotification";
import { paddingDecorator } from "./utils/decorators";

export default {
  title: "vs-notification",
  component: VsNotification,
  decorators: [withKnobs, paddingDecorator]
};

export const allPropsInteractive = () => ({
  props: {
    color: {
      default: radios(
        "color",
        {
          error: "error",
          warning: "warning",
          info: "info",
          success: "success"
        },
        "info"
      )
    },
    slotValue: {
      // TODO: change along with color text
      default: text("slotValue", `default notification`)
    }
  },
  template: html`
    <vs-notification :color="color">{{slotValue}} </vs-notification>
  `
});
