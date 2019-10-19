import { createComponent } from "@vue/composition-api";
import { VNode } from "vue";

const classNamePrefix = "vs-circular-progress";

interface VsButtonProps extends HTMLElement {
  /**
   * Size of progress
   */
  size: "small" | "normal";
  /**
   * Color of Progress
   */
  color: "currentColor" | "primary" | string;
}

const VsButton = createComponent<VsButtonProps>({
  props: {
    size: {
      default: "normal"
    },
    color: {
      default: "primary"
    }
  },
  setup(props) {
    function judgePrimaryColor(color: string): boolean {
      return color === "primary";
    }

    return (): VNode => {
      const isPrimaryColor = judgePrimaryColor(props.color);

      const classData = {
        [classNamePrefix]: true,
        [`${classNamePrefix}--${props.size}`]: true,
        [`${classNamePrefix}--primary-color`]: isPrimaryColor
      };
      return (
        <i>
          <svg
            class={classData}
            viewBox="0 0 66 66"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              class={`${classNamePrefix}__path`}
              fill="none"
              cx="33"
              cy="33"
              r="30"
              stroke={props.color}
            ></circle>
          </svg>
        </i>
      );
    };
  }
});

export default VsButton;
