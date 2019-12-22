import { createComponent } from "@vue/composition-api";
import { VNode } from "vue";
import { HTMLAttributes } from "../../types/dom";

const classNamePrefix = "vs-table-row";

interface VsTableRowProps extends HTMLAttributes {}

const VsTableRow = createComponent<VsTableRowProps>({
  setup(props, ctx) {
    return (): VNode => {
      return <tr class={classNamePrefix}>{ctx.slots.default?.()}</tr>;
    };
  }
});

export default VsTableRow;
