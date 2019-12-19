import { createComponent, provide } from "@vue/composition-api";
import { VNode } from "vue";
import { TableHTMLAttributes } from "../../types/dom";
import { TABLE_HEAD_SYMBOL } from "./tableInjection";

const classNamePrefix = "vs-table-head";

interface VsTableHeadProps extends TableHTMLAttributes {}

const VsTableHead = createComponent<VsTableHeadProps>({
  setup(props, ctx) {
    provide(TABLE_HEAD_SYMBOL, {
      [TABLE_HEAD_SYMBOL]: true
    });
    return (): VNode => {
      return <thead class={classNamePrefix}>{ctx.slots.default?.()}</thead>;
    };
  }
});

export default VsTableHead;
