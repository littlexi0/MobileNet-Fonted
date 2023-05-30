import { createStore } from "vuex";
import bootstrap from "bootstrap/dist/js/bootstrap.min.js";

export default createStore({
  state: {
    hideConfigButton: false,
    isPinned: true,
    showConfig: false,
    isTransparent: "",
    isRTL: false,
    color: "",
    isNavFixed: false,
    isAbsolute: false,
    showNavs: true,
    showSidenav: true,
    showNavbar: true,
    showFooter: true,
    showMain: true,
    userid:0,
    username: "littlexi",
    avatar:"qny.littlexi.love/FjKDpNq_oZfD3-zDja5MdiBrsDly",
    wenyhub:"https://qny.littlexi.love/",
    token:"n0meldsLEp57rVsgOvp-NXq5pNLFDbwbHPXxkxpG:81vGyDsu-uMaXxCtunpBmkq53Lk=:eyJzY29wZSI6IndlbnlodWIiLCJkZWFkbGluZSI6MjY4NTM2MDk2MywiZGV0ZWN0TWltZSI6MX0=",
    apikey:"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",
    paper:{
      id:'',
      title:'游戏环境下的中国文化输出探索——以《原神》为例',
      library:'文化',
      author:'刘姝秀',
      country:'中国',
      press:'中国传媒大学文化产业管理学院',
      pressdata:'2021-10-01',
      url:'https://qny.littlexi.love/FmgyW6rKjpbaA-jeCkpbLKlHgbjB'
    },    
    navbarFixed:
      "position-sticky blur shadow-blur left-auto top-1 z-index-sticky px-0 mx-4",
    absolute: "position-absolute px-4 mx-0 w-100 z-index-2",
    bootstrap
  },
  mutations: {
    toggleConfigurator(state) {
      state.showConfig = !state.showConfig;
    },
    navbarMinimize(state) {
      const sidenav_show = document.querySelector(".g-sidenav-show");
      if (sidenav_show.classList.contains("g-sidenav-hidden")) {
        sidenav_show.classList.remove("g-sidenav-hidden");
        sidenav_show.classList.add("g-sidenav-pinned");
        state.isPinned = true;
      } else {
        sidenav_show.classList.add("g-sidenav-hidden");
        sidenav_show.classList.remove("g-sidenav-pinned");
        state.isPinned = false;
      }
    },
    sidebarType(state, payload) {
      state.isTransparent = payload;
    },
    cardBackground(state, payload) {
      state.color = payload;
    },
    navbarFixed(state) {
      if (state.isNavFixed === false) {
        state.isNavFixed = true;
      } else {
        state.isNavFixed = false;
      }
    },
    toggleEveryDisplay(state) {
      state.showNavbar = !state.showNavbar;
      state.showSidenav = !state.showSidenav;
      state.showFooter = !state.showFooter;
    },
    toggleHideConfig(state) {
      state.hideConfigButton = !state.hideConfigButton;
    },
    togglesidenav(state){
      state.showSidenav = !state.showSidenav;
    }
  },
  actions: {
    toggleSidebarColor({ commit }, payload) {
      commit("sidebarType", payload);
    },
    setCardBackground({ commit }, payload) {
      commit("cardBackground", payload);
    },
  },
  getters: {}
});
