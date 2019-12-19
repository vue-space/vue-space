import { createComponent } from "@vue/composition-api";
import { VNode } from "vue";
import { HTMLAttributes } from "../../types/dom";

const classNamePrefix = "vs-row";
const noGuttersPrefix = "vs-no-gutters";

interface VsRowProps extends HTMLAttributes {
  /**
   * gutter
   */
  gutter: boolean;
}

const VsRow = createComponent<VsRowProps>({
  props: {
    gutter: {
      default: false
    }
  },
  setup(props, ctx) {
    return (): VNode => {
      const classData = {
        [classNamePrefix]: true,
        [noGuttersPrefix]: !props.gutter
      };

      return (
        <div class={classData} {...{ on: ctx.listeners }}>
          {ctx.slots.default?.()}
        </div>
      );
    };
  }
});

export default VsRow;
