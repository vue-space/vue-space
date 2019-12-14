import { createComponent, inject } from "@vue/composition-api";
import { VNode } from "vue";
import { InputHTMLAttributes, FormEvent } from "../../types/dom";
import {
  RadioGroupProviderSymbol,
  RadioGroupContextValue
} from "../VsRadioGroup/RadioGroupProviderSymbol";
import { VsRadioGroupProps } from "../VsRadioGroup";

const classNamePrefix = "vs-radio";

interface VsRadioProps extends Omit<InputHTMLAttributes, "type"> {}

const VsRadio = createComponent<VsRadioProps>({
  props: {
    checked: {
      default: false
    },
    value: {
      default: null
    },
    name: {
      default: null
    }
  },
  model: {
    prop: "checked",
    event: "input"
  },
  inheritAttrs: false,
  setup(props, ctx) {
    const radioGroupContext =
      inject<RadioGroupContextValue<VsRadioGroupProps>>(
        RadioGroupProviderSymbol
      ) || null;

    /**
     * for v-model
     */
    function eventInput(event: FormEvent<InputHTMLAttributes>): void {
      ctx.emit("input", event.currentTarget.checked);

      radioGroupContext?.eventInput?.(props.value);
    }

    function judgeChecked(): boolean | undefined {
      return (
        radioGroupContext?.groupProps.value === props.value || props.checked
      );
    }

    return (): VNode => {
      const { disabled, name } = props;

      return (
        <label class={`${classNamePrefix}`}>
          <input
            class={`${classNamePrefix}__input`}
            type="radio"
            disabled={disabled}
            checked={judgeChecked()}
            name={radioGroupContext?.groupProps.name ?? name}
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
