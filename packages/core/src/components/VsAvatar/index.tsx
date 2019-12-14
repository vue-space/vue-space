import { createComponent } from "@vue/composition-api";
import { VNode } from "vue";
import { HTMLAttributes } from "../../types/dom";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import VsIcon from "../VsIcon";

const classNamePrefix = "vs-avatar";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface VsAvatarProps extends HTMLAttributes {
  /**
   * size
   */
  size: "small" | "normal" | "large";
  /**
   * image
   */
  image: string;
}

const VsAvatar = createComponent<VsAvatarProps>({
  props: {
    size: {
      default: "normal"
    },
    image: {
      default: ""
    }
  },
  setup(props, ctx) {
    return (): VNode => {
      const classData = {
        [classNamePrefix]: true,
        [`${classNamePrefix}--${props.size}`]: true
      };
      return (
        <div class={classData} {...{ on: ctx.listeners }}>
          {props.image ? (
            <img alt="" src={props.image} />
          ) : (
            <VsIcon name="person-outline" />
          )}
        </div>
      );
    };
  }
});

export default VsAvatar;
