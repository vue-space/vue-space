import { createComponent, provide } from "@vue/composition-api";
import { VNode } from "vue";
import { HTMLAttributes } from "../../types/dom";
import { ValueAttribute } from "../../types/props";
import { RadioGroupProviderSymbol } from "./RadioGroupProviderSymbol";

export interface VsRadioGroupProps extends HTMLAttributes {
  /**
   * radios name
   */
  name: string;
  /**
   * selected radio value
   */
  value: ValueAttribute;
}

const VsRadioProps = createComponent<VsRadioGroupProps>({
  props: {
    name: {
      default: null
    }
  },
  setup(props, ctx) {
    /**
     * for v-model
     */
    function eventInput(value: ValueAttribute): void {
      ctx.emit("input", value);
    }

    provide(RadioGroupProviderSymbol, {
      groupProps: props,
      eventInput
    });

    return (): VNode => {
      return (
        <div {...{ on: { ...ctx.listeners, input: eventInput } }}>
          {ctx.slots.default()}
        </div>
      );
    };
  }
});

export default VsRadioProps;
