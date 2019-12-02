import { VNode } from "vue";

export const isEmptyNode = (node: VNode): boolean => {
  return !node.tag && /^\s$/.test(node.text ?? "");
};
