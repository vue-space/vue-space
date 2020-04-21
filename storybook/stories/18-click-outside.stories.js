import { html } from "./utils/editor";
import { paddingDecorator } from "./utils/decorators";
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: "vs-click-outside",
  decorators: [withKnobs, paddingDecorator]
};

export const allPropsInteractive = () => ({
  data() {
    return {
      page: 1,
      size: 10
    };
  },
  methods: {
    handleClickOutside(event) {
      console.log(event);
    }
  },
  template: html`
    <vs-click-outside @click-outside="handleClickOutside">
      abc
    </vs-click-outside>
  `
});
