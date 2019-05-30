import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: "start",
      path: "/:spot",
      component: () => import("@/views/Home"),
      props: true
    }
  ]
});
