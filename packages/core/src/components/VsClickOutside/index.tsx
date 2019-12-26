import {
  createComponent,
  onMounted,
  onUnmounted,
  ref
} from "@vue/composition-api";
import { VNode } from "vue";
import { FormHTMLAttributes } from "../../types/dom";
import { AnyProps } from "../../types/props";

interface VsClickOutsideProps extends FormHTMLAttributes, AnyProps {
  tag: string;
}

const VsClickOutside = createComponent<VsClickOutsideProps>({
  props: {
    tag: {
      default: "div"
    }
  },
  setup(props, ctx) {
    const element = ref<HTMLElement>(null);

    function handleOutsideEvent(event: Event): void {
      const path = event.composedPath?.();
      if (
        path
          ? path.indexOf(element.value as Node) < 0
          : element.value?.contains(event.target as Node)
      ) {
        ctx.emit("click-outside", event);
      }
    }

    onMounted(() =>
      document.body.addEventListener("click", handleOutsideEvent)
    );

    onUnmounted(() =>
      document.body.removeEventListener("click", handleOutsideEvent)
    );

    return (): VNode => (
      <props.tag ref={element} {...{ on: ctx.listeners }}>
        {ctx.slots.default?.()}
      </props.tag>
    );
  }
});

export default VsClickOutside;
