
import store from "./../store";
import Dashboard from "./../components/userPage/Dashboard";
import UserPage from "./../views/UserPage";

const ifNotAuthenticated = (to, from, next) => {
    console.log("ROTAAAAAAAA 1", store.getters.isAuthenticated);
    if (!store.getters.isAuthenticated) {
        next("/login");
        return;
    }
    next();
};

const ifAuthenticated = (to, from, next) => {
    console.log("ROTAAAAAAAA 2", store.getters.isAuthenticated);
    if (store.getters.isAuthenticated) {
        next("/dashboard");
        return;
    }
    next();
};

// let pagesMenu = {
//     path: '/pages',
//     component: UserPage,
//     name: 'Pages',
//     redirect: '/pages/user',
//     children: [
//         {
//             path: 'user',
//             name: 'User Page',
//             component: User
//         },
//     ]
// }

const routes = [
    {
        path: "/login",
        name: "login",
        component: () => import('./../views/Login'),
        beforeEnter: ifAuthenticated
    },
    {
        path: "/",
        name: "home",
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
        path: "/userPage",
        name: "userPage",
        redirect: "/dashboard",
        component: UserPage,
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
                component: () => import('./../components/userPage/ProjetoProfile'),
                beforeEnter: ifNotAuthenticated
            },
            {
                path: '/projeto/add',
                name: 'formProjeto',
                component: () => import('./../components/userPage/FormProjeto'),
                beforeEnter: ifNotAuthenticated
            },
            {
                path: '/projetos',
                name: 'searchJobs',
                component: () => import('./../components/userPage/FeedProjetos'),
                beforeEnter: ifNotAuthenticated
            },
        ]
    },
]

export default routes