import { createComponent, PropType } from "@vue/composition-api";
import { VNode } from "vue";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import VsCircularProgress from "../VsCircularProgress";

const VsButton = createComponent({
  props: {
    /**
     * Size of button
     */
    size: {
      type: String as PropType<"small" | "normal">,
      default: "normal"
    },

    /**
     * Type of button
     */
    variant: {
      type: String as PropType<
        "primary" | "secondary" | "danger" | "danger-secondary"
      >,
      default: "secondary"
    },

    /**
     * Gets the classification and default behavior of the button.
     */
    type: {
      type: String as PropType<HTMLButtonElement["type"]>,
      default: "button"
    },

    /**
     * Specify the HTML tag.
     * eg: tag = "div"
     */
    tag: {
      type: String as PropType<keyof HTMLElementTagNameMap>,
      default: "button"
    },

    /**
     * Is loading
     */
    loading: {
      type: Boolean,
      default: false
    },

    /**
     * Is disabled
     */
    disabled: {
      type: Boolean,
      default: false
    },

    /**
     * span the full width of a parent
     */
    block: {
      type: Boolean,
      default: false
    }
  },
  setup(props, ctx) {
    return (): VNode => {
      const isDisabled = props.disabled || props.loading;

      const classNamePrefix = "vs-btn";
      const classData = {
        [classNamePrefix]: true,
        [`${classNamePrefix}--${props.size}`]: true,
        [`${classNamePrefix}--${props.variant}`]: true,
        [`${classNamePrefix}--disabled`]: isDisabled,
        [`${classNamePrefix}--icon`]: props.loading,
        [`${classNamePrefix}--block`]: props.block
      };
      return (
        <props.tag
          class={classData}
          disabled={isDisabled}
          type={props.type}
          {...{ on: ctx.listeners }}
        >
          {props.loading && (
            <VsCircularProgress
              class={`${classNamePrefix}__icon`}
              color="currentColor"
              size="small"
            />
          )}

          {ctx.slots.default && ctx.slots.default()}
        </props.tag>
      );
    };
  }
});

export default VsButton;
