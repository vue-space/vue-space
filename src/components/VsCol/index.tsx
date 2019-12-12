import { createComponent } from "@vue/composition-api";
import { VNode } from "vue";
import { HTMLAttributes } from "../../types/dom";

const classNamePrefix = "vs-col";
const offsetNamePrefix = "vs-offset";
const orderNamePrefix = "vs-order";

interface VsColProps extends HTMLAttributes {
  /**
   * Basic span of col
   */
  span: number | boolean;
  /**
   * xs
   */
  xs: number | boolean | "auto";
  /**
   * sm
   */
  sm: number | boolean | "auto";
  /**
   * md
   */
  md: number | boolean | "auto";
  /**
   * lg
   */
  lg: number | boolean | "auto";
  /**
   * xl
   */
  xl: number | boolean | "auto";
  /**
   * offset
   */
  offset: number;
  /**
   * order
   */
  order: number;
}

const VsCol = createComponent<VsColProps>({
  props: {
    span: {
      default: false
    },
    xs: {
      default: false
    },
    sm: {
      default: false
    },
    md: {
      default: false
    },
    lg: {
      default: false
    },
    xl: {
      default: false
    },
    offset: {
      default: null
    },
    order: {
      default: null
    }
  },
  setup(props, ctx) {
    return (): VNode => {
      const { span, offset, order } = props;

      const classData = {
        [classNamePrefix]: true,
        ...Object.assign(
          {},
          ...(["xs", "sm", "md", "lg", "xl"] as Array<keyof VsColProps>).map(
            size => ({
              [`${classNamePrefix}-${size}${
                isNaN(props[size] as number) ? "" : `-${props[size]}`
              }`]: Boolean(props[size]),
              [`${classNamePrefix}-${Boolean(props[size]) ? 12 : span}`]:
                Boolean(props[size]) || Boolean(span)
            })
          )
        ),
        [`${offsetNamePrefix}-${offset}`]: Boolean(offset),
        [`${orderNamePrefix}-${order}`]: Boolean(order)
      };

      return (
        <div class={classData} {...{ on: ctx.listeners }}>
          {ctx.slots.default()}
        </div>
      );
    };
  }
});

export default VsCol;
