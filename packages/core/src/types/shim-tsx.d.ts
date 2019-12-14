/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Vue, { VNode } from "vue";
import { ComponentRenderProxy } from "@vue/composition-api";
import { VIntrinsicElementAttributes } from "./dom";

declare global {
  namespace JSX {
    interface Element extends VNode {}
    interface ElementClass extends ComponentRenderProxy {}
    interface ElementAttributesProperty {
      $props: any; // specify the property name to use
    }
    interface IntrinsicElements extends VIntrinsicElementAttributes {
      [elem: string]: any;
    }
  }
}
