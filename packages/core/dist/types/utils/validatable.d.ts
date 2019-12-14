import { AriaAttributes } from "../types/dom";
import { VNode } from "vue";
export interface ValidatableComponent {
    /**
     * validate status
     */
    validateStatus: "success" | "error" | "normal";
}
export declare const validatableComponentProps: {
    validateStatus: {
        default: string;
    };
};
declare type FormValidationFunction = (classNamePrefix: string, validateStatus: string) => {
    validationClassName: object;
    validationAriaAttributes: Pick<AriaAttributes, "aria-invalid">;
    isValidateSuccess: boolean;
    isValidateError: boolean;
    validationIcon: VNode | null;
};
export declare const computeValidation: FormValidationFunction;
export {};
