import { ValueAttribute } from "../../types/props";
/**
 * provider name of radio group
 */
export declare const RadioGroupProviderSymbol: unique symbol;
export declare type RadioGroupContextValue<T> = {
    groupProps: T;
    eventInput: (value: ValueAttribute) => void;
};
