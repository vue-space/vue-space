import { createComponent } from "@vue/composition-api";
import { VNode } from "vue";
import { FormHTMLAttributes } from "../../types/dom";
import { AnyProps } from "../../types/props";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import VsClickOutside from "../VsClickOutside";

interface VsModalProps extends FormHTMLAttributes, AnyProps {
  tag: string;
}

const VsModal = createComponent<VsModalProps>({
  props: {
    tag: {
      default: "div"
    }
  },
  inheritAttrs: false,
  setup(props, ctx) {
    return (): VNode => (
      <div tabIndex={-1}>
        <VsClickOutside
          {...{ attrs: ctx.attrs }}
          {...{
            on: {
              ...ctx.listeners,
              ["click-outside"]: (e: Event): void => console.log(e)
            }
          }}
        >
          {ctx.slots.title?.()}
          {ctx.slots.default?.()}
          yahaha
        </VsClickOutside>
      </div>
    );
  }
});

export default VsModal;
