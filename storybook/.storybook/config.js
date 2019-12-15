import { configure, addParameters } from '@storybook/vue';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import Vue from 'vue';
import VueSpace from '@vue-space/core';
import '@vue-space/styles';
import { ValidationProvider, extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';
Vue.use(VueSpace);

Vue.component('ValidationProvider', ValidationProvider);

// No message specified.
extend('email', email);

// Override the default message.
extend('required', required);

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage
  }
});
// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
