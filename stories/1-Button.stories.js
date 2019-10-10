import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { html } from "./utils/editor";

import MyButton from "./MyButton";
import Great from "../src/index";

export default {
  title: "Button"
};

export const text = () => ({
  components: { Great },
  template: "<great />",
  methods: { action: action("clicked") }
});

export const jsx = () => ({
  components: { MyButton },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render(h) {
    return <my-button onClick={this.action}>With JSX</my-button>;
  },
  methods: { action: linkTo("clicked") }
});

export const emoji = () => ({
  components: { MyButton },
  template: html`
    <my-button @click="action">😀 😎 👍 💯</my-button>
  `,
  methods: { action: action("clicked") }
});
