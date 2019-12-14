import { html } from './utils/editor';
import { radios, boolean, withKnobs, text } from '@storybook/addon-knobs';
import { paddingDecorator } from './utils/decorators';

export default {
  title: 'vs-button',
  decorators: [withKnobs, paddingDecorator]
};

export const allPropsInteractive = () => ({
  props: {
    size: {
      default: radios(
        'size',
        {
          small: 'small',
          normal: 'normal'
        },
        'normal'
      )
    },
    variant: {
      default: radios(
        'variant',
        {
          primary: 'primary',
          secondary: 'secondary',
          danger: 'danger',
          'danger-secondary': 'danger-secondary'
        },
        'secondary'
      )
    },
    loading: {
      default: boolean('loading', false)
    },
    disabled: {
      default: boolean('disabled', false)
    },
    block: {
      default: boolean('block', false)
    },
    slotValue: {
      default: text('slotValue', 'default button')
    }
  },
  methods: {
    greet: function(event) {
      console.log(event);
    }
  },
  template: html`
    <vs-button
      :size="size"
      :variant="variant"
      :loading="loading"
      :disabled="disabled"
      :block="block"
      @click="greet"
      >{{slotValue}}</vs-button
    >
  `
});
