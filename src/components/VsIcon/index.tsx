import { createComponent } from "@vue/composition-api";
import { VNode } from "vue";

interface VsIconProps {
  name: string;
}

const VsIcon = createComponent<VsIconProps>({
  props: {
    name: {
      default: ""
    }
  },
  setup(props) {
    return (): VNode => <i class={`iconfont icon${props.name}`} />;
  }
});

export default VsIcon;
