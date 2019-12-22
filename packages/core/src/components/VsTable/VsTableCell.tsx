import { createComponent, inject } from "@vue/composition-api";
import { VNode } from "vue";
import { TdHTMLAttributes, ThHTMLAttributes } from "../../types/dom";
import { TABLE_HEAD_SYMBOL, TableHeaderContext } from "./tableInjection";

const classNamePrefix = "vs-";

interface VsTableCellProps extends TdHTMLAttributes, ThHTMLAttributes {
  tag: string;
  align: "left" | "right" | "center";
  padding: boolean;
}

const VsTableCell = createComponent<VsTableCellProps>({
  props: {
    tag: {
      default: "td"
    },
    align: {
      default: "left"
    },
    scope: {
      default: undefined
    },
    padding: {
      default: true
    }
  },
  setup(props, ctx) {
    const tableHeaderContext =
      inject<TableHeaderContext>(TABLE_HEAD_SYMBOL) || null;

    const isTableHeaderCell = tableHeaderContext?.[TABLE_HEAD_SYMBOL] ?? false;

    return (): VNode => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const TableCellComponent = isTableHeaderCell ? "th" : props.tag;

      const classData = {
        [`${classNamePrefix}table-cell`]: true,
        [`${classNamePrefix}no-padding-y`]: !props.padding,
        [`${classNamePrefix}text-align-${props.align}`]: true
      };

      return (
        <TableCellComponent
          class={classData}
          scope={props.scope ?? isTableHeaderCell ? "col" : undefined}
        >
          {ctx.slots.default?.()}
        </TableCellComponent>
      );
    };
  }
});

export default VsTableCell;
