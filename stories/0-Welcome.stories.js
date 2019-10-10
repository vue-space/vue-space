import { linkTo } from "@storybook/addon-links";
import { html } from "./utils/editor";
import Welcome from "./Welcome";

export default {
  title: "Welcome"
};

export const toStorybook = () => ({
  components: { Welcome },
  template: html`
    <welcome :showApp="action" />
  `,
  methods: { action: linkTo("Button") }
});

toStorybook.story = {
  name: "to Storybook"
};
