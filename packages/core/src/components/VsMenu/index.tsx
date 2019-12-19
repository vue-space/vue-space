import { createComponent } from "@vue/composition-api";
import { VNode } from "vue";
import { HTMLAttributes } from "../../types/dom";

const classNamePrefix = "vs-menu";

interface VsMenuProps extends HTMLAttributes {}

const VsMenu = createComponent<VsMenuProps>({
  setup(props, ctx) {
    return (): VNode => {
      return (
        <nav class={classNamePrefix}>
          <ol>{ctx.slots.default?.()}</ol>
        </nav>
      );
    };
  }
});

export default VsMenu;
