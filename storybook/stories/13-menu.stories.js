import { html } from "./utils/editor";
import { paddingDecorator } from "./utils/decorators";
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: "vs-menu",
  decorators: [withKnobs, paddingDecorator]
};

export const allPropsInteractive = () => ({
  template: html`
    <vs-menu style="max-width:220px">
      <vs-menu-item :caption="true">基本选项</vs-menu-item>
      <vs-menu-item v-slot="{ activeClass }">
        <a :class="activeClass"><vs-icon name="cube" />基本选项1</a>
      </vs-menu-item>
      <vs-menu-item>
        <a><vs-icon name="cube" />基本选项1</a>
      </vs-menu-item>
      <vs-menu-item>
        <a><vs-icon name="cube" />基本选项1</a>
      </vs-menu-item>
      <vs-menu-item>
        <a><vs-icon name="cube" />基本选项1</a>
      </vs-menu-item>
      <vs-menu-item>
        <a><vs-icon name="cube" />基本选项1</a>
      </vs-menu-item>

      <vs-menu-item :caption="true">基本选项</vs-menu-item>
      <vs-menu-item>
        <a><vs-icon name="cube" />基本选项1</a>
      </vs-menu-item>
      <vs-menu-item>
        <a><vs-icon name="cube" />基本选项1</a>
      </vs-menu-item>
      <vs-menu-item>
        <a><vs-icon name="cube" />基本选项1</a>
      </vs-menu-item>
    </vs-menu>
  `
});
