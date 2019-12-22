import { AriaAttributes } from "../types/dom";
import { VNode } from "vue";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import VsIconClose from "@vue-space/icons/dist/VsIconClose";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import VsIconCheckmark from "@vue-space/icons/dist/VsIconCheckmark";

export interface ValidatableComponent {
  /**
   * validate status
   */
  validateStatus: "success" | "error" | "normal";
}

export const validatableComponentProps = {
  validateStatus: {
    default: "normal"
  }
};

type FormValidationFunction = (
  classNamePrefix: string,
  validateStatus: string
) => {
  validationClassName: object;
  validationAriaAttributes: Pick<AriaAttributes, "aria-invalid">;
  isValidateSuccess: boolean;
  isValidateError: boolean;
  validationIcon: VNode | null;
};

export const computeValidation: FormValidationFunction = (
  classNamePrefix,
  validateStatus
) => {
  const isValidateSuccess = validateStatus === "success";
  const isValidateError = validateStatus === "error";
  const validationClassName = {
    [`${classNamePrefix}--success`]: isValidateSuccess,
    [`${classNamePrefix}--error`]: isValidateError
  };
  const validationAriaAttributes = {
    "aria-invalid": isValidateError
  };
  const validationIcon = isValidateError ? (
    <VsIconClose />
  ) : isValidateSuccess ? (
    <VsIconCheckmark />
  ) : null;
  return {
    validationClassName,
    validationAriaAttributes,
    isValidateError,
    isValidateSuccess,
    validationIcon
  };
};
