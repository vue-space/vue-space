import { html } from './utils/editor';
import { withKnobs } from '@storybook/addon-knobs';
import { paddingDecorator } from './utils/decorators';

export default {
  title: 'vs-breadcrumb',
  decorators: [withKnobs, paddingDecorator]
};

export const allPropsInteractive = () => ({
  props: {},
  methods: {},
  template: html`
    <vs-breadcrumb>
      <a href="/">WAI-ARIA Authoring Practices 1.1</a>
      <a href="/">Design Patterns</a>
      <a href="/">Breadcrumb Pattern</a>
    </vs-breadcrumb>
  `
});
