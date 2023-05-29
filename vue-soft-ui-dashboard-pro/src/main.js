import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import VueTilt from "vue-tilt.js";
import VueSweetalert2 from "vue-sweetalert2";
import SoftUIDashboard from "./soft-ui-dashboard";
// import axios from "axios";
// 引入ant-design-ui，在这里加入，然后在下面的行中use
import { Button,Switch,Drawer,Table,Modal,List,Comment,Form ,Input } from 'ant-design-vue';


const appInstance = createApp(App);
appInstance.use(store);
appInstance.use(router);
appInstance.use(VueTilt);
appInstance.use(VueSweetalert2);
appInstance.use(SoftUIDashboard);
// appInstance.use(axios);
appInstance.use(Button);
appInstance.use(Switch);
appInstance.use(Drawer);
appInstance.use(Table);
appInstance.use(Modal);
appInstance.use(List);
appInstance.use(Comment);
appInstance.use(Form);
appInstance.use(Input);
// appInstance.prototype.$http = axios;
// appInstance.use(axios);
appInstance.mount("#app");
