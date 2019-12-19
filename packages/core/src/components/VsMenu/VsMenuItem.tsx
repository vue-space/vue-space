import { createComponent } from "@vue/composition-api";
import { VNode } from "vue";
import { HTMLAttributes } from "../../types/dom";

const classNamePrefix = "vs-menu-item";

interface VsMenuItemProps extends HTMLAttributes {
  caption: boolean;
}

const VsMenuItem = createComponent<VsMenuItemProps>({
  props: {
    caption: {
      default: false
    }
  },
  setup(props, ctx) {
    return (): VNode => {
      const classData = {
        [classNamePrefix]: true,
        [`${classNamePrefix}--caption`]: props.caption
      };
      return (
        <li class={classData} aria-invalid={props.caption}>
          {ctx.slots.default?.({ activeClass: "active-class" })}
        </li>
      );
    };
  }
});

export default VsMenuItem;
