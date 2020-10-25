import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { createWebHashHistory, createRouter } from "vue-router";
import Sherry from "./components/Sherry.vue";
import Sherry2 from "./components/Sherry2.vue";

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    {
      path: "/",
      component: Sherry,
    },
    {
      path: "/sherry2",
      component: Sherry2,
    },
  ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
