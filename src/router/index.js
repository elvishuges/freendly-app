import Vue from "vue";
import Router from "vue-router";
import store from "./../store";
import Dashboard from "./../components/homepage/Dashboard";
import HomePage from "./../views/HomePage";

Vue.use(Router);

const ifNotAuthenticated = (to, from, next) => {
  console.log("ROTAAAAAAAA 1",store.getters.isAuthenticated);
  if (!store.getters.isAuthenticated) {
    next("/login");
    return;
  }
  next();
};

const ifAuthenticated = (to, from, next) => {
  console.log("ROTAAAAAAAA 2",store.getters.isAuthenticated);
  if (store.getters.isAuthenticated) {
      next("/dashboard");
    return;
  }
  next();
};

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/login",
      name: "login",
      component: () => import('./../views/Login'),
      beforeEnter: ifAuthenticated
    },
    {
      path: "/button",
      name: "button",
      component: () => import('./../views/Button'),
    },
    {
      path: "/register",
      name: "register",
      component: () => import('./../views/Register'),
      beforeEnter: ifAuthenticated
    },

    {
        path: "/homePage",
        name: "homePage",
        component: HomePage,
        children: [
          {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,
            beforeEnter: ifNotAuthenticated
          },
          {
            path: '/dashboard/projeto/:idProjeto',
            name: 'projeto',
            component: () => import('./../components/homepage/ProjetoProfile'),
            beforeEnter: ifNotAuthenticated
          },
          {
            path: '/formProjeto',
            name: 'formProjeto',
            component: () => import('./../components/homepage/FormProjeto'),
            beforeEnter: ifNotAuthenticated
          },
          {
            path: '/searchJobs',
            name: 'searchJobs',
            component: () => import('./../components/homepage/SearchJobs'),
            beforeEnter: ifNotAuthenticated
          },
        ]
    },
  ]
});