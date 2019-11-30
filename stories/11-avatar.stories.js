import { html } from "./utils/editor";
import VsButton from "../src/components/VsButton";
import { paddingDecorator } from "./utils/decorators";
import { radios, boolean, withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: "vs-avatar",
  decorators: [withKnobs, paddingDecorator]
};

export const allPropsInteractive = () => ({
  props: {
    size: {
      default: radios(
        "size",
        {
          small: "small",
          normal: "normal",
          large: "large"
        },
        "normal"
      )
    },
    image: {
      default: text("image", "")
    }
  },
  methods: {},
  template: html`
    <vs-avatar :size="size" :image="image"> </vs-avatar>
  `
});
