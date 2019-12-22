import { createComponent } from "@vue/composition-api";
import { VNode } from "vue";
import { InputHTMLAttributes, FormEvent } from "../../types/dom";

import {
  ValidatableComponent,
  validatableComponentProps,
  computeValidation
} from "../../utils/validatable";

const classNamePrefix = "vs-input";

interface VsInputProps extends InputHTMLAttributes, ValidatableComponent {
  /**
   * input type
   */
  type:
    | "text"
    | "password"
    | "email"
    | "number"
    | "url"
    | "tel"
    | "search"
    | "range"
    | "color"
    | "date"
    | "time"
    | "datetime"
    | "datetime-local"
    | "month"
    | "week";
}

const VsInput = createComponent<VsInputProps>({
  props: {
    value: {
      default: ""
    },
    type: {
      default: "text"
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
      const { disabled, type, validateStatus, value } = props;
      const { prefix, suffix } = ctx.slots;

      const isPassword = type === "password";

      const {
        validationClassName,
        validationAriaAttributes,
        isValidateSuccess,
        isValidateError,
        validationIcon
      } = computeValidation(classNamePrefix, validateStatus);

      const hasPrefix = Boolean(prefix);
      const hasSuffix = Boolean(
        suffix || isPassword || isValidateSuccess || isValidateError
      );

      const classData = {
        [classNamePrefix]: true,
        [`${classNamePrefix}--prefix`]: hasPrefix,
        [`${classNamePrefix}--suffix`]: hasSuffix,
        ...validationClassName
      };

      const inputElement = (
        <input
          class={classData}
          value={value}
          type={type}
          disabled={disabled}
          aria-disabled={disabled}
          {...{ on: { ...ctx.listeners, input: eventInput } }}
          {...{ attrs: { ...ctx.attrs, ...validationAriaAttributes } }}
        />
      );

      const prefixElement = hasPrefix && (
        <span class={`${classNamePrefix}__prefix`}>{prefix()}</span>
      );
      const suffixElement = hasSuffix && (
        <span class={`${classNamePrefix}__suffix`}>
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
