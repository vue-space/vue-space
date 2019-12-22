import { createComponent } from "@vue/composition-api";
import { VNode } from "vue";
import { HTMLAttributes } from "../../types/dom";

const classPrefix = "vs-";

interface VsPagination extends HTMLAttributes {
  shadow: "sm" | "md" | "lg" | "xl" | "none";
  padding: "sm" | "md" | "lg" | "xl" | "none";
  borderRadius: "sm" | "md" | "lg" | "none";
}

const VsPaper = createComponent<VsPagination>({
  props: {
    shadow: {
      default: "md"
    },
    padding: {
      default: "md"
    },
    borderRadius: {
      default: "md"
    }
  },
  setup(props, ctx) {
    return (): VNode => {
      const classData = {
        [`${classPrefix}paper`]: true,
        [`${classPrefix}shadow-${props.shadow}`]: true,
        [`${classPrefix}padding-${props.padding}`]: true,
        [`${classPrefix}border-radius-${props.borderRadius}`]: true
      };
      return <div class={classData}>{ctx.slots.default?.()}</div>;
    };
  }
});

export default VsPaper;
