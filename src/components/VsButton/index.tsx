import { createComponent } from "@vue/composition-api";
import { VNode } from "vue";

const VsButton = createComponent({
  props: {
    /**
     * Size of button
     * @type {"small"|"normal"}
     */
    size: {
      type: String,
      default: "normal"
    },

    /**
     * Type of button
     * @type {"primary"|"secondary"|"danger"}
     */
    type: {
      type: String,
      default: "secondary"
    },

    /**
     * Is loading
     * @type {boolean}
     */
    loading: {
      type: Boolean,
      default: false
    },

    /**
     * Is disabled
     * @type {boolean}
     */
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props, ctx) {
    return (): VNode => {
      const classData = {
        "vs-btn": true,
        [`vs-btn--${props.size}`]: true,
        [`vs-btn--${props.type}`]: true,
        "vs-btn--disabled": props.disabled,
        "vs-btn--loading": props.loading
      };
      return (
        <button class={classData}>
          {ctx.slots.default && ctx.slots.default()}
        </button>
      );
    };
  }
});

export default VsButton;
