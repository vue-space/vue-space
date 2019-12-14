import { linkTo } from '@storybook/addon-links';
import { html } from './utils/editor';

export default {
  title: 'Welcome'
};

export const toStorybook = () => ({
  template: html`
    <div>yahaha</div>
  `,
  methods: { action: linkTo('Button') }
});

toStorybook.story = {
  name: 'to Storybook'
};
