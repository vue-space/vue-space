import { html } from "./utils/editor";
import { radios, withKnobs } from "@storybook/addon-knobs";
import Centered from "@storybook/addon-centered/vue";

export default {
  title: "vs-circular-progress",
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
    }
  },
  methods: {
    greet: function(event) {
      console.log(event);
    }
  },
  template: html`
    <vs-circular-progress :size="size" />
  `
});
