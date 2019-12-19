export const TABLE_HEAD_SYMBOL = Symbol("table header inject");
export interface TableHeaderContext {
  [TABLE_HEAD_SYMBOL]: boolean;
}
