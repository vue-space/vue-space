import { createComponent, PropType } from "@vue/composition-api";
import { VNode } from "vue";

const VsThemeProvider = createComponent({
  props: {
    /**
     * Theme
     */
    theme: {
      type: String as PropType<"light" | "dark">,
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
