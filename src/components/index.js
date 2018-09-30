import SpAvatar from "./SpAvatar";

const Components = {
  SpAvatar
};

const install = function(Vue) {
  if (install.installed) return;

  Object.keys(Components).forEach(key => {
    Vue.component(key, Components[key]);
  });
  install.installed = true;
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

const API = {
  version: process.env.VERSION,
  install,
  ...Components
};

export default API;
