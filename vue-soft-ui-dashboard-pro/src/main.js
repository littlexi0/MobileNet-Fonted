/**
=========================================================
* Vue Soft UI Dashboard PRO - v3.0.0
=========================================================
* Product Page: https://creative-tim.com/product/vue-soft-ui-dashboard-pro
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
Coded by www.creative-tim.com
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import VueTilt from "vue-tilt.js";
import VueSweetalert2 from "vue-sweetalert2";
import SoftUIDashboard from "./soft-ui-dashboard";

// 引入ant-design-ui，在这里加入，然后在下面的行中use
import { Button,Switch } from 'ant-design-vue';

const appInstance = createApp(App);
appInstance.use(store);
appInstance.use(router);
appInstance.use(VueTilt);
appInstance.use(VueSweetalert2);
appInstance.use(SoftUIDashboard);
appInstance.use(Button);
appInstance.use(Switch);
appInstance.mount("#app");
