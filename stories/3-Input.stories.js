import { html } from "./utils/editor";
import { radios, withKnobs, text } from "@storybook/addon-knobs";
import VsButton from "../src/components/VsButton";
import { paddingDecorator } from "./utils/decorators";

export default {
  title: "vs-input",
  component: VsButton,
  decorators: [withKnobs, paddingDecorator]
};

export const allPropsInteractive = () => ({
  props: {
    validateStatus: {
      default: radios(
        "validateStatus",
        { success: "success", error: "error", normal: "normal" },
        "normal"
      )
    },
    type: {
      default: text("type", "text")
    }
  },
  data() {
    return {
      value: ""
    };
  },
  template: html`
    <vs-input
      v-model="value"
      placeholder="yahaha"
      :validateStatus="validateStatus"
      :type="type"
    />
  `
});
