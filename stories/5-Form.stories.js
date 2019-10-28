import { html } from "./utils/editor";
import { radios, withKnobs, text } from "@storybook/addon-knobs";
import { paddingDecorator } from "./utils/decorators";

export default {
  title: "vs-form",
  decorators: [withKnobs, paddingDecorator]
};

export const normalForm = () => ({
  data() {
    return {
      form: {
        normalForm: "",
        errorForm: "",
        successForm: ""
      }
    };
  },
  template: html`
    <vs-form @submit.prevent>
      <vs-form-item label="Normal Form" labelFor="normal-form">
        <vs-input
          id="normal-form"
          v-model="form.normalForm"
          placeholder="normal form"
        />
      </vs-form-item>
      <vs-form-item
        label="Error Form"
        labelFor="error-form"
        validateStatus="error"
        description="Let us know your name."
        feedback="Please enter something"
      >
        <vs-input
          id="error-form"
          v-model="form.errorForm"
          placeholder="error form"
          validateStatus="error"
        />
      </vs-form-item>
      <vs-form-item
        label="Success Form"
        labelFor="success-form"
        validateStatus="success"
      >
        <vs-input
          id="success-form"
          v-model="form.successForm"
          placeholder="Success Form"
          validateStatus="success"
        />
      </vs-form-item>
      <vs-form-item>
        <vs-button variant="primary">Submit</vs-button>
        <vs-button>Cancel</vs-button>
      </vs-form-item>
    </vs-form>
  `
});
