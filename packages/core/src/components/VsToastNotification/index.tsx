import { createComponent } from "@vue/composition-api";
import { VNode } from "vue";
import { HTMLAttributes } from "../../types/dom";
import VsIconCloseCircle from "@vue-space/icons/dist/VsIconCloseCircle";
import VsIconClose from "@vue-space/icons/dist/VsIconClose";
import VsIconCheckmark from "@vue-space/icons/dist/VsIconCheckmarkCircle2";
import VsIconInfo from "@vue-space/icons/dist/VsIconInfo";
import VsIconAlert from "@vue-space/icons/dist/VsIconAlertCircle";

const classNamePrefix = "vs-toast-notification";

interface VsToastNotificationProps extends HTMLAttributes {
  /**
   * Type of toast notification
   */
  type: "error" | "warning" | "info" | "success" | "normal";
  /**
   * Content of notification
   */
  content: string;
}

const VsToastNotification = createComponent<VsToastNotificationProps>({
  props: {
    type: {
      default: "normal"
    },
    title: {
      default: "Notification"
    },
    content: {
      default: "Notification Content"
    }
  },
  setup(props, ctx) {
    function onClose(): void {
      console.log("!");
    }

    return (): VNode => {
      const classData = {
        [classNamePrefix]: true,
        [`${classNamePrefix}--${props.type}`]: true
      };

      const IconList = {
        error: <VsIconCloseCircle />,
        warning: <VsIconAlert />,
        info: <VsIconInfo />,
        success: <VsIconCheckmark />
      };

      return (
        <div class={classData}>
          <div class={`${classNamePrefix}__icon`}>
            {props.type !== "normal" && IconList[props.type]}
          </div>
          <div class={`${classNamePrefix}__main`}>
            <p class={`${classNamePrefix}__title`}>{props.title}</p>
            <p class={`${classNamePrefix}__content`}>{props.content}</p>
          </div>
          <div class={`${classNamePrefix}__close`}>
            <VsIconClose {...{ on: { ...ctx.listeners, click: onClose } }} />
          </div>
        </div>
      );
    };
  }
});

export default VsToastNotification;
