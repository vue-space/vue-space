import { createComponent } from "@vue/composition-api";
import { VNode } from "vue";
import { InputHTMLAttributes, FormEvent } from "../../types/dom";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import VsIconArrowDown from "@vue-space/icons/dist/VsIconArrowDown";

import {
  ValidatableComponent,
  validatableComponentProps,
  computeValidation
} from "../../utils/validatable";

const classNamePrefix = "vs-input";

interface VsSelectProps extends InputHTMLAttributes, ValidatableComponent {}

const VsInput = createComponent<VsSelectProps>({
  props: {
    value: {
      default: ""
    },
    ...validatableComponentProps
  },
  inheritAttrs: false,
  setup(props, ctx) {
    /**
     * for v-model
     */
    function eventInput(event: FormEvent<InputHTMLAttributes>): void {
      ctx.emit("input", event.currentTarget.value);
    }

    return (): VNode => {
      const { disabled, validateStatus, value } = props;
      const { prefix, suffix } = ctx.slots;

      const {
        validationClassName,
        validationAriaAttributes,
        isValidateSuccess,
        isValidateError,
        validationIcon
      } = computeValidation(classNamePrefix, validateStatus);

      const hasPrefix = Boolean(prefix);
      const hasSuffix = Boolean(suffix || isValidateSuccess || isValidateError);

      const classData = {
        [classNamePrefix]: true,
        [`${classNamePrefix}--disabled`]: disabled,
        [`${classNamePrefix}--prefix`]: hasPrefix,
        [`${classNamePrefix}--suffix`]: hasSuffix,
        ...validationClassName
      };

      const inputElement = (
        <select
          class={classData}
          value={value}
          disabled={disabled}
          aria-disabled={disabled}
          {...{ on: { ...ctx.listeners, input: eventInput } }}
          {...{ attrs: { ...ctx.attrs, ...validationAriaAttributes } }}
        >
          {ctx.slots.default?.()}
        </select>
      );

      const prefixElement = hasPrefix && (
        <span class={`${classNamePrefix}__prefix`}>{prefix()}</span>
      );
      const suffixElement = (
        <span class={`${classNamePrefix}__suffix`}>
          <VsIconArrowDown />
          {suffix && suffix()}
          {validationIcon}
        </span>
      );

      return (
        <span class={`${classNamePrefix}__wrapper`}>
          {prefixElement}
          {inputElement}
          {suffixElement}
        </span>
      );
    };
  }
});

export default VsInput;
