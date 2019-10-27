import { createComponent } from "@vue/composition-api";
import { VNode } from "vue";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import VsCircularProgress from "../VsCircularProgress";
import { RouterLinkProps } from "../../types/RouterLinkProps";
import { ButtonHTMLAttributes } from "../../types/dom";

const classNamePrefix = "vs-btn";

interface VsButtonProps extends ButtonHTMLAttributes, RouterLinkProps {
  /**
   * Size of button
   */
  size: "small" | "normal";
  /**
   * Type of button
   */
  variant: "primary" | "secondary" | "danger" | "danger-secondary";
  /**
   * Specify the HTML tag.
   * eg: tag = "div"
   */
  tag: keyof HTMLElementTagNameMap | "router-link";
  /**
   * Is loading
   */
  loading: boolean;
  /**
   * Is disabled
   */
  disabled: boolean;
  /**
   * span the full width of a parent
   */
  block: boolean;
}

const VsButton = createComponent<VsButtonProps>({
  props: {
    size: {
      default: "normal"
    },
    variant: {
      default: "secondary"
    },
    tag: {
      default: "button"
    },
    loading: {
      default: false
    },
    disabled: {
      default: false
    },
    block: {
      default: false
    }
  },
  setup(props, ctx) {
    /**
     * if button text is two CN char, split them with space (inspired by ant design)
     */
    function splitTwoCNChar(
      nodes?: VNode[]
    ): boolean | string | VNode[] | undefined {
      const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
      if (
        nodes &&
        nodes.length === 1 &&
        !nodes[0].tag &&
        rxTwoCNChar.test(nodes[0].text || "")
      ) {
        const twoChar = nodes[0].text || "";
        return twoChar.split("").join(" ");
      }
      return nodes;
    }

    return (): VNode => {
      const isDisabled = props.disabled || props.loading;

      const classData = {
        [classNamePrefix]: true,
        [`${classNamePrefix}--${props.size}`]: true,
        [`${classNamePrefix}--${props.variant}`]: true,
        [`${classNamePrefix}--disabled`]: isDisabled,
        [`${classNamePrefix}--icon`]: props.loading,
        [`${classNamePrefix}--block`]: props.block
      };

      const children = splitTwoCNChar(ctx.slots.default());

      return (
        <props.tag
          tabindex="0"
          class={classData}
          disabled={isDisabled}
          aria-disabled={isDisabled}
          {...{ on: ctx.listeners }}
        >
          {props.loading && (
            <VsCircularProgress
              class={`${classNamePrefix}__icon`}
              color="currentColor"
              size="small"
            />
          )}

          {children}
        </props.tag>
      );
    };
  }
});

export default VsButton;
