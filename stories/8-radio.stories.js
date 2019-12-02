import { html } from "./utils/editor";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import { paddingDecorator } from "./utils/decorators";

export default {
  title: "vs-radio",
  decorators: [withKnobs, paddingDecorator]
};

export const allPropsInteractive = () => ({
  props: {
    disabled: {
      default: boolean("disabled", false)
    },
    radioValue: {
      default: text("radioValue", "c")
    }
  },
  data() {
    return {
      value: false
    };
  },
  watch: {
    value(val) {
      console.log(val);
    }
  },
  template: html`
    <vs-radio-group v-model="value" name="label">
      <vs-radio :value="radioValue" :disabled="disabled">LabelA</vs-radio>
      <vs-radio value="b" :disabled="disabled">LabelB</vs-radio>
    </vs-radio-group>
  `
});
