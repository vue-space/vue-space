import { createComponent } from "@vue/composition-api";
import { VNode } from "vue";
import { HTMLAttributes } from "../../types/dom";

const classNamePrefix = "vs-tab-item";

interface VsTabItemProps extends HTMLAttributes {}

const VsTabItem = createComponent<VsTabItemProps>({
  setup(props, ctx) {
    return (): VNode => {
      const classData = {
        [classNamePrefix]: true
      };
      return (
        <li class={classData}>
          {ctx.slots.default?.({ activeClass: "active-class" })}
        </li>
      );
    };
  }
});

export default VsTabItem;
