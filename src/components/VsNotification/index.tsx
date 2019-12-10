import { createComponent } from "@vue/composition-api";
import { VNode } from "vue";
import { HTMLAttributes } from "../../types/dom";
import VsIcon from "../VsIcon";

const classNamePrefix = "vs-notification";

interface VsNotificationProps extends HTMLAttributes {
  /**
   * Color of notification
   */
  color: "error" | "warning" | "info" | "success";
}

const VsNotification = createComponent<VsNotificationProps>({
  props: {
    color: {
      default: "info"
    }
  },
  setup(props, ctx) {
    return (): VNode => {
      const classData = {
        [classNamePrefix]: true,
        [`${classNamePrefix}--${props.color}`]: true
      };

      // select icon according to color
      let iconName = "";
      switch (props.color) {
        case "error":
          iconName = "close-circle";
          break;
        case "warning":
          iconName = "alert-circle";
          break;
        case "info":
          iconName = "info";
          break;
        case "success":
          // TODO: cannot show correctly
          iconName = "checkmark-circle";
          break;
        default:
          break;
      }

      return (
        <div class={classData}>
          <VsIcon name={iconName} class={`${classNamePrefix}-icon`}></VsIcon>
          <div class={`${classNamePrefix}-content`}>{ctx.slots.default()}</div>
          <VsIcon name="close" class={`${classNamePrefix}-close-icon`}></VsIcon>
        </div>
      );
    };
  }
});

export default VsNotification;
