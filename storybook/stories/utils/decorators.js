import { html } from "./editor";
import { makeDecorator } from "@storybook/addons";
export const paddingDecorator = makeDecorator({
  name: "padding",
  wrapper: () => ({
    template: html`
      <div style="padding:40px">
        <story />
      </div>
    `
  })
});
