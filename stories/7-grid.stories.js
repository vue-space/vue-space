import { html } from "./utils/editor";
import { radios, boolean, withKnobs, text } from "@storybook/addon-knobs";
import VsButton from "../src/components/VsButton";
import { paddingDecorator } from "./utils/decorators";

export default {
  title: "vs-grid",
  component: VsButton,
  decorators: [withKnobs, paddingDecorator]
};

export const allPropsInteractive = () => ({
  props: {},
  methods: {},
  template: html`
    <vs-row>
      <vs-col md="4">a</vs-col>
      <vs-col md="4">a</vs-col>
      <vs-col md="4">a</vs-col>
    </vs-row>
  `
});
