import { createComponent } from "@vue/composition-api";
import { VNode } from "vue";
interface VsButtonProps {
  size: "small" | "normal";
  color: "currentColor" | "primary" | string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

const VsButton = createComponent<VsButtonProps>({
  props: {
    /**
     * Size of progress
     */
    size: {
      default: "normal"
    },

    /**
     * Color of Progress
     */
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

      const classNamePrefix = "vs-circular-progress";
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
