import { createComponent } from "@vue/composition-api";
import { VNode } from "vue";

interface VsThemeProviderProps {
  /**
   * Theme
   */
  theme: "light" | "dark";
}

const VsThemeProvider = createComponent<VsThemeProviderProps>({
  props: {
    theme: {
      default: "light"
    }
  },
  setup(props, ctx) {
    return (): VNode => {
      return (
        <div class={`vs-theme-${props.theme}`}>{ctx.slots.default?.()}</div>
      );
    };
  }
});

export default VsThemeProvider;
