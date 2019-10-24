import { html } from "./utils/editor";
import { radios, boolean, withKnobs, text } from "@storybook/addon-knobs";
import Centered from "@storybook/addon-centered/vue";
import VsButton from "../src/components/VsButton";

export default {
  title: "vs-input",
  component: VsButton,
  decorators: [withKnobs, Centered]
};

export const allPropsInteractive = () => ({
  data() {
    return {
      value: ""
    };
  },
  methods: {
    greet: function(event) {
      console.log(event);
    }
  },
  template: html`
    <vs-input v-model="value" placeholder="yahaha" />
  `
});
