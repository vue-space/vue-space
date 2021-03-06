import VsButton from "./components/VsButton";
import VsThemeProvider from "./components/VsThemeProvider";
import VsCircularProgress from "./components/VsCircularProgress";
import VsInput from "./components/VsInput";
import VsForm from "./components/VsForm";
import VsSelect from "./components/VsSelect";
import VsFormItem from "./components/VsFormItem";
import VsRow from "./components/VsRow";
import VsCol from "./components/VsCol";
import VsCheckbox from "./components/VsCheckbox";
import VsRadio from "./components/VsRadio";
import VsRadioGroup from "./components/VsRadioGroup";
import VsBreadcrumb from "./components/VsBreadcrumb";
import VsAvatar from "./components/VsAvatar";
import VsMenu from "./components/VsMenu";
import VsMenuItem from "./components/VsMenu/VsMenuItem";
import VsTab from "./components/VsTab";
import VsTabItem from "./components/VsTab/VsTabItem";
import VsPaper from "./components/VsPaper";
import VsTable from "./components/VsTable";
import VsTableBody from "./components/VsTable/VsTableBody";
import VsTableCell from "./components/VsTable/VsTableCell";
import VsTableHead from "./components/VsTable/VsTableHead";
import VsTableRow from "./components/VsTable/VsTableRow";
import VsPagination from "./components/VsPagination";

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
  VsForm,
  VsFormItem,
  VsRow,
  VsCol,
  VsSelect,
  VsCheckbox,
  VsRadio,
  VsRadioGroup,
  VsBreadcrumb,
  VsAvatar,
  VsMenu,
  VsMenuItem,
  VsTab,
  VsTabItem,
  VsPaper,
  VsTable,
  VsTableBody,
  VsTableCell,
  VsTableHead,
  VsTableRow,
  VsPagination
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
