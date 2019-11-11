import "./styles/index.scss";
import VsButton from "./components/VsButton";
import VsThemeProvider from "./components/VsThemeProvider";
import VsCircularProgress from "./components/VsCircularProgress";
import VsInput from "./components/VsInput";
import VsIcon from "./components/VsIcon";
import VsForm from "./components/VsForm";
import VsSelect from "./components/VsSelect";
import VsFormItem from "./components/VsFormItem";
import VsRow from "./components/VsRow";
import VsCol from "./components/VsCol";
import VsCheckbox from "./components/VsCheckbox";
import VsRadio from "./components/VsRadio";

import VueCompositionApi from "@vue/composition-api";

import { PluginFunction } from "vue";
const Components: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
} = {
  VsButton,
  VsThemeProvider,
  VsCircularProgress,
  VsInput,
  VsIcon,
  VsForm,
  VsFormItem,
  VsRow,
  VsCol,
  VsSelect,
  VsCheckbox,
  VsRadio
};

const install: PluginFunction<never> = function(Vue) {
  Object.keys(Components).forEach(key => {
    Vue.component(key, Components[key]);
  });

  Vue.use(VueCompositionApi);
};

const VueSpace = {
  install,
  NAME: "vue-space"
};

export default VueSpace;
