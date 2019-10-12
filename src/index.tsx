import "./styles/index.scss";
import VsButton from "./components/VsButton";
import VsThemeProvider from "./components/VsThemeProvider";
import VueCompositionApi from "@vue/composition-api";

import { PluginFunction } from "vue";
const Components = {
  VsButton,
  VsThemeProvider
};

const install: PluginFunction<never> = function(Vue) {
  (Object.keys(Components) as Array<keyof typeof Components>).forEach(key => {
    Vue.component(key as string, Components[key]);
  });

  Vue.use(VueCompositionApi);
};

const VueSpace = {
  install,
  NAME: "vue-space"
};

export default VueSpace;
