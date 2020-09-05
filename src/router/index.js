import Vue from "vue";
import Router from "vue-router";
import store from "./../store";
import Dashboard from "./../components/homepage/Dashboard";
import HomePage from "./../views/HomePage";

Vue.use(Router);

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next("/login");
    return;
  }
  next();
};

const ifAuthenticated = (to, from, next) => {
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
      name: "Login",
      component: () => import('./../views/Login'),
      beforeEnter: ifAuthenticated
    },
    {
      path: "/register",
      name: "Register",
      component: () => import('./../views/Register'),
      beforeEnter: ifAuthenticated
    },
    {
        path: "/homePage",
        name: "HomePage",
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
        ]
    },
  ]
});