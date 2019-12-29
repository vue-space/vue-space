import { html } from "./utils/editor";
import { radios, withKnobs, text } from "@storybook/addon-knobs";
import { paddingDecorator } from "./utils/decorators";

export default {
  title: "vs-toast-notification",
  decorators: [withKnobs, paddingDecorator]
};

export const allPropsInteractive = () => ({
  props: {
    type: {
      default: radios(
        "type",
        {
          error: "error",
          warning: "warning",
          info: "info",
          success: "success",
          normal: "normal"
        },
        "info"
      )
    },
    title: {
      default: text("title", "title")
    },
    content: {
      default: text("content", "content of toast notification")
    }
  },
  template: html`
    <vs-toast-notification
      :type="type"
      :title="title"
      :content="content"
    ></vs-toast-notification>
  `
});
