import { html } from "./utils/editor";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { paddingDecorator } from "./utils/decorators";

export default {
  title: "vs-radio",
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
    <div>
      <vs-radio v-model="checked" :disabled="disabled">Label</vs-radio>
      <vs-radio v-model="checked" :disabled="disabled">Label</vs-radio>
    </div>
  `
});
