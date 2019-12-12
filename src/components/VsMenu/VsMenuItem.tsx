import { createComponent } from "@vue/composition-api";
import { VNode } from "vue";
import { HTMLAttributes } from "../../types/dom";
import VsIcon from "../VsIcon";

const classNamePrefix = "vs-menu-item";

interface VsMenuItemProps extends HTMLAttributes {
  caption: boolean;
  icon: string;
}

const VsMenuItem = createComponent<VsMenuItemProps>({
  props: {
    caption: {
      default: false
    },
    icon: {
      default: null
    }
  },
  setup(props, ctx) {
    return (): VNode => {
      const classData = {
        [classNamePrefix]: true,
        [`${classNamePrefix}--caption`]: props.caption,
        [`${classNamePrefix}--icon`]: props.icon
      };
      return (
        <li class={classData} aria-invalid={props.caption}>
          {ctx.slots.default({ activeClass: "active-class" })}
          {props.icon && <VsIcon name={props.icon} />}
        </li>
      );
    };
  }
});

export default VsMenuItem;
