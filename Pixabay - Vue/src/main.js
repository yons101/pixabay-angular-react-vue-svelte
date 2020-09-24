import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
    { path: "/about/", component: About },
    { path: "/", component: Home }
];

const router = new VueRouter({
    routes,
    mode: "history"
});
new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount("#app");
