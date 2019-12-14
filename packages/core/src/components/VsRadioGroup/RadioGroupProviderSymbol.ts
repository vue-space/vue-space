import { ValueAttribute } from "../../types/props";

/**
 * provider name of radio group
 */
export const RadioGroupProviderSymbol = Symbol("RadioGroupProvider");

export type RadioGroupContextValue<T> = {
  groupProps: T;
  eventInput: (value: ValueAttribute) => void;
};
