import "./index.scss";

import Vue from "vue";
import { createComponent } from "@vue/composition-api";
import VueCompositionApi from "@vue/composition-api";
Vue.use(VueCompositionApi);

type MyComponentPropsType = {
  name?: string;
};

const MyComponent = createComponent<MyComponentPropsType>({
  name: "App",
  props: {
    name: String
  },
  render() {
    this.name;
    return (
      <div class="hello-world">
        <div>hello world</div>
      </div>
    );
  }
});

export default createComponent({
  render(h) {
    return h(MyComponent, { props: {} });
  }
});
