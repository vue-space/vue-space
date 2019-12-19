import { createComponent } from "@vue/composition-api";
import { VNode } from "vue";
import { FormHTMLAttributes } from "../../types/dom";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface VsFormProps extends FormHTMLAttributes {}

const VsForm = createComponent<VsFormProps>({
  props: {},
  setup(props, ctx) {
    return (): VNode => (
      <form {...{ on: ctx.listeners }}>{ctx.slots.default?.()}</form>
    );
  }
});

export default VsForm;
