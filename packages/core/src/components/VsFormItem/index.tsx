import { createComponent } from "@vue/composition-api";
import { VNode } from "vue";
import { LabelHTMLAttributes } from "../../types/dom";

const classNamePrefix = "vs-form-item";

interface VsFormItemProps extends LabelHTMLAttributes {
  /**
   * Label value
   */
  label: string;
  /**
   * For attribute for label item
   */
  labelFor: string;
  /**
   * Form item description
   */
  description: string;
  /**
   * Form item feedback
   */
  feedback: string;
  /**
   * Form valid status
   */
  validateStatus: "success" | "error" | "normal";
}

const VsFormItem = createComponent<VsFormItemProps>({
  props: {
    label: {
      default: ""
    },
    labelFor: {
      default: ""
    },
    description: {
      default: ""
    },
    feedback: {
      default: ""
    },
    validateStatus: {
      default: "normal"
    }
  },
  inheritAttrs: false,
  setup(props, ctx) {
    return (): VNode => {
      // label
      const labelElement = props.label && (
        <label
          class={`${classNamePrefix}__label`}
          for={props.labelFor}
          {...{ attrs: ctx.attrs }}
        >
          {props.label}
        </label>
      );

      // feedback
      const feedbackClassName = {
        [`${classNamePrefix}__feedback`]: true,
        [`${classNamePrefix}__feedback--${props.validateStatus}`]: true
      };
      const feedbackElement = props.feedback && (
        <div class={feedbackClassName}>{props.feedback}</div>
      );

      // description
      const descriptionElement = props.description && (
        <small class={`${classNamePrefix}__description`}>
          {props.description}
        </small>
      );

      return (
        <div class={classNamePrefix}>
          {labelElement}
          {ctx.slots.default()}
          {feedbackElement}
          {descriptionElement}
        </div>
      );
    };
  }
});

export default VsFormItem;
