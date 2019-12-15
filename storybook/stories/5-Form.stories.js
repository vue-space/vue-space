import { html } from './utils/editor';
import { paddingDecorator } from './utils/decorators';
import { action } from '@storybook/addon-actions';

export default {
  title: 'vs-form',
  decorators: [paddingDecorator]
};

export const normalForm = () => ({
  data() {
    return {
      form: {
        normalForm: '',
        errorForm: '',
        successForm: '',
        todoForm: '',
        checkbox: false,
        radio: 'a'
      }
    };
  },
  methods: {
    eventSubmit: action('submit')
  },
  template: html`
    <vs-form @submit.prevent="eventSubmit">
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

      <validation-provider name="yahahas" rules="required" v-slot="{ errors }">
        <vs-form-item
          label="Error Form"
          labelFor="error-form"
          :validateStatus="errors[0]&&'error'"
          description="Let us know your name."
          :feedback="errors[0]"
        >
          <vs-input
            id="error-form"
            v-model="form.todoForm"
            placeholder="error form"
            :validateStatus="errors[0]&&'error'"
          />
        </vs-form-item>
      </validation-provider>

      <vs-form-item label="Radio Input">
        <vs-radio-group v-model="form.radio" name="label">
          <vs-radio value="a">LabelA</vs-radio>
          <vs-radio value="b">LabelB</vs-radio>
        </vs-radio-group>
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
        <vs-checkbox v-model="form.checkbox">
          I accept every license
        </vs-checkbox>
      </vs-form-item>
      <vs-form-item>
        <vs-button type="submit" variant="primary">Submit</vs-button>
        <vs-button type="button">Cancel</vs-button>
      </vs-form-item>
    </vs-form>
  `
});
