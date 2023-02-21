import { 
  createRouter,
  createWebHashHistory,
  RouteRecordRaw
} from "vue-router";
import Home from '../views/home/index.vue';
import About from '../views/about//index.vue';

const routes : RouteRecordRaw[] = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/about",
    component: About
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router