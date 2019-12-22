import { html } from './utils/editor';
import { paddingDecorator } from './utils/decorators';
import { withKnobs } from '@storybook/addon-knobs';
import VsIconCube from '@vue-space/icons/dist/VsIconCube';

export default {
  title: 'vs-menu',
  decorators: [withKnobs, paddingDecorator]
};

export const allPropsInteractive = () => ({
  components: {
    VsIconCube
  },
  template: html`
    <vs-menu style="max-width:220px">
      <vs-menu-item :caption="true">基本选项</vs-menu-item>
      <vs-menu-item v-slot="{ activeClass }">
        <a :class="activeClass"><vs-icon-cube />基本选项1</a>
      </vs-menu-item>
      <vs-menu-item>
        <a><vs-icon-cube />基本选项1</a>
      </vs-menu-item>
      <vs-menu-item>
        <a><vs-icon-cube />基本选项1</a>
      </vs-menu-item>
      <vs-menu-item>
        <a><vs-icon-cube />基本选项1</a>
      </vs-menu-item>
      <vs-menu-item>
        <a><vs-icon-cube />基本选项1</a>
      </vs-menu-item>

      <vs-menu-item :caption="true">基本选项</vs-menu-item>
      <vs-menu-item>
        <a><vs-icon-cube />基本选项1</a>
      </vs-menu-item>
      <vs-menu-item>
        <a><vs-icon-cube />基本选项1</a>
      </vs-menu-item>
      <vs-menu-item>
        <a><vs-icon-cube />基本选项1</a>
      </vs-menu-item>
    </vs-menu>
  `
});
