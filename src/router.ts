import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/home.vue";
import Doc from "./views/doc.vue";
import SwitchDemo from './components/SwitchDemo.vue'


const history = createWebHashHistory();
export const router = createRouter({
  history,
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/doc",
      component: Doc,
      children: [{
        path: 'switch',
        component: SwitchDemo,
      }]
    },
  ],
});
router.afterEach(() => {
  
})

