import { html } from "./utils/editor";
import { radios, withKnobs, text } from "@storybook/addon-knobs";
import { paddingDecorator } from "./utils/decorators";

export default {
  title: "vs-form-item",
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
    label: {
      default: text("label", "Label")
    },
    feedback: {
      default: text("feedback", "Please enter something")
    },
    description: {
      default: text("description", "Let us know your name.")
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
    <vs-form-item
      :label="label"
      labelFor="input"
      :validateStatus="validateStatus"
      :description="description"
      :feedback="feedback"
    >
      <vs-input
        id="input"
        v-model="value"
        placeholder="yahaha"
        :validateStatus="validateStatus"
        :type="type"
      />
    </vs-form-item>
  `
});
