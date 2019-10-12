import { createComponent } from "@vue/composition-api";
import { VNode } from "vue";

const VsThemeProvider = createComponent({
  props: {
    /**
     * Theme
     * @type {"light"|"dark"}
     */
    theme: {
      type: String,
      default: "light"
    }
  },
  setup(props, ctx) {
    return (): VNode => {
      return (
        <div class={`vs-theme-${props.theme}`}>
          {ctx.slots.default && ctx.slots.default()}
        </div>
      );
    };
  }
});

export default VsThemeProvider;
