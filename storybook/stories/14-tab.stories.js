import { html } from './utils/editor';
import { paddingDecorator } from './utils/decorators';
import { withKnobs } from '@storybook/addon-knobs';
import VsIconCube from '@vue-space/icons/dist/VsIconCube';

export default {
  title: 'vs-tab',
  decorators: [withKnobs, paddingDecorator]
};

export const allPropsInteractive = () => ({
  components: {
    VsIconCube
  },
  template: html`
    <vs-tab>
      <vs-tab-item v-slot="{ activeClass }">
        <a :class="activeClass"><vs-icon-cube />基本选项1</a>
      </vs-tab-item>
      <vs-tab-item>
        <a><vs-icon-cube />基本选项1</a>
      </vs-tab-item>
      <vs-tab-item>
        <a><vs-icon-cube />基本选项1</a>
      </vs-tab-item>
      <vs-tab-item>
        <a><vs-icon-cube />基本选项1</a>
      </vs-tab-item>
    </vs-tab>
  `
});
