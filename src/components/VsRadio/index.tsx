import { createComponent } from "@vue/composition-api";
import { VNode } from "vue";
import { InputHTMLAttributes, FormEvent } from "../../types/dom";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import VsIcon from "../VsIcon";

const classNamePrefix = "vs-radio";

interface VsRadioProps extends Omit<InputHTMLAttributes, "type"> {}

const VsRadio = createComponent<VsRadioProps>({
  props: {
    checked: {
      default: false
    }
  },
  model: {
    prop: "checked",
    event: "input"
  },
  inheritAttrs: false,
  setup(props, ctx) {
    /**
     * for v-model
     */
    function eventInput(event: FormEvent<InputHTMLAttributes>): void {
      ctx.emit("input", event.currentTarget.checked);
    }

    return (): VNode => {
      const { disabled, checked } = props;

      return (
        <label class={`${classNamePrefix}`}>
          <input
            class={`${classNamePrefix}__input`}
            type="radio"
            disabled={disabled}
            checked={checked}
            {...{ on: { ...ctx.listeners, input: eventInput } }}
            {...{ attrs: ctx.attrs }}
          />
          <span class={`${classNamePrefix}__icon`}>
            <span class={`${classNamePrefix}__icon-inner`} />
          </span>
          <span class={`${classNamePrefix}__label`}>{ctx.slots.default()}</span>
        </label>
      );
    };
  }
});

export default VsRadio;
