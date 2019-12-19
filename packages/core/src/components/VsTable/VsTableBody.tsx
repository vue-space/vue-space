import { createComponent } from "@vue/composition-api";
import { VNode } from "vue";
import { HTMLAttributes } from "../../types/dom";

const classNamePrefix = "vs-table-body";

interface VsTableBodyProps extends HTMLAttributes {}

const VsTableBody = createComponent<VsTableBodyProps>({
  setup(props, ctx) {
    return (): VNode => {
      return <tbody class={classNamePrefix}>{ctx.slots.default?.()}</tbody>;
    };
  }
});

export default VsTableBody;
