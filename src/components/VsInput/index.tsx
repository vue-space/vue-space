import { createComponent } from "@vue/composition-api";
import { VNode } from "vue";
import { InputHTMLAttributes, FormEvent } from "../../types/dom";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import VsIcon from "../VsIcon";

const classNamePrefix = "vs-input";

interface VsInputProps extends InputHTMLAttributes {
  /**
   * validate status
   */
  validateStatus: "success" | "error" | "normal";
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
    validateStatus: {
      default: "normal"
    },
    type: {
      default: "text"
    }
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

      const isValidateSuccess = validateStatus === "success";
      const isValidateError = validateStatus === "error";

      const hasPrefix = Boolean(prefix);
      const hasSuffix = Boolean(
        suffix || isPassword || isValidateSuccess || isValidateError
      );

      const classData = {
        [classNamePrefix]: true,
        [`${classNamePrefix}--disabled`]: disabled,
        [`${classNamePrefix}--success`]: isValidateSuccess,
        [`${classNamePrefix}--error`]: isValidateError,
        [`${classNamePrefix}--prefix`]: hasPrefix,
        [`${classNamePrefix}--suffix`]: hasSuffix
      };

      const inputElement = (
        <input
          class={classData}
          value={value}
          type={type}
          disabled={disabled}
          aria-disabled={disabled}
          aria-invalid={isValidateError}
          {...{ on: { ...ctx.listeners, input: eventInput } }}
          {...{ attrs: ctx.attrs }}
        />
      );

      if (hasSuffix || hasPrefix) {
        const prefixElement = hasPrefix && (
          <span class={`${classNamePrefix}__prefix`}>{prefix()}</span>
        );
        const suffixElement = hasSuffix && (
          <span class={`${classNamePrefix}__suffix`}>
            {isValidateError ? (
              <VsIcon name="close" />
            ) : isValidateSuccess ? (
              <VsIcon name="checkmark" />
            ) : (
              suffix()
            )}
          </span>
        );

        return (
          <span class={`${classNamePrefix}__wrapper`}>
            {prefixElement}
            {inputElement}
            {suffixElement}
          </span>
        );
      } else {
        return inputElement;
      }
    };
  }
});

export default VsInput;
