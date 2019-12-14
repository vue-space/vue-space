import { configure, addParameters } from '@storybook/vue';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import Vue from 'vue';
import VueSpace from '@vue-space/core';
import '@vue-space/styles';

Vue.use(VueSpace);

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage
  }
});
// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
