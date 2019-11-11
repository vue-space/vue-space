import { html } from "./utils/editor";
import { radios, withKnobs, text } from "@storybook/addon-knobs";
import { paddingDecorator } from "./utils/decorators";

export default {
  title: "vs-select",
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
    }
  },
  data() {
    return {
      value: "",
      options: [
        { text: "One", value: "A" },
        { text: "Two", value: "B" },
        { text: "Three", value: "C" }
      ]
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
      <vs-select
        id="input"
        v-model="value"
        :validateStatus="validateStatus"
        :type="type"
      >
        <option value="" disabled selected>Select your option</option>
        <option v-for="option in options" v-bind:value="option.value">
          {{ option.text }}
        </option>
      </vs-select>
    </vs-form-item>
  `
});
