import { createComponent } from "@vue/composition-api";
import { VNode } from "vue";
import { HTMLAttributes } from "../../types/dom";

const classNamePrefix = "vs-tab";

interface VsTabProps extends HTMLAttributes {}

const VsTab = createComponent<VsTabProps>({
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

export default VsTab;
