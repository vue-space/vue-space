import { html } from "./utils/editor";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { paddingDecorator } from "./utils/decorators";

export default {
  title: "vs-checkbox",
  decorators: [withKnobs, paddingDecorator]
};

export const allPropsInteractive = () => ({
  props: {
    disabled: {
      default: boolean("disabled", false)
    }
  },
  data() {
    return {
      checked: false
    };
  },
  template: html`
    <vs-checkbox v-model="checked" :disabled="disabled">
      Label
    </vs-checkbox>
  `
});
