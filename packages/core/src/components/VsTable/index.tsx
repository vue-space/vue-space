import { createComponent } from "@vue/composition-api";
import { VNode } from "vue";
import { TableHTMLAttributes } from "../../types/dom";

const classNamePrefix = "vs-table";

interface VsTableProps extends TableHTMLAttributes {}

const VsTable = createComponent<VsTableProps>({
  setup(props, ctx) {
    return (): VNode => {
      return <table class={classNamePrefix}>{ctx.slots.default?.()}</table>;
    };
  }
});

export default VsTable;
