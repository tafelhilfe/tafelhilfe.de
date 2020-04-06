import Vue from "vue";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from "./App.vue";
import axios from "axios";
import router from "./router";
import FontAwesomeIcon from "vue-fontawesome"


import "@/assets/css/scss/custom.scss";

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.component('font-awesome-icon', FontAwesomeIcon)



Vue.filter("capitalize", function(value) {
  if (!value) return "";
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
