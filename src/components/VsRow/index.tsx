import { createComponent } from "@vue/composition-api";
import { VNode } from "vue";
import { HTMLAttributes } from "../../types/dom";

const classNamePrefix = "vs-row";

interface VsRowProps extends HTMLAttributes {}

const VsRow = createComponent<VsRowProps>({
  props: {},
  setup(props, ctx) {
    return (): VNode => {
      return (
        <div class={classNamePrefix} {...{ on: ctx.listeners }}>
          {ctx.slots.default()}
        </div>
      );
    };
  }
});

export default VsRow;
