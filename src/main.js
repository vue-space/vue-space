import Vue from "vue";
import App from "./App.vue";
import VueSpace from "./components/index";

Vue.config.productionTip = false;
Vue.use(VueSpace);

new Vue({
  render: h => h(App)
}).$mount("#app");
