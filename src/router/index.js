import {createRouter, createWebHistory} from '@ionic/vue-router';

// Imports
import Home from '../pages/HomePage.vue'
import PronosticList from '../pages/ListPronosticPage.vue'
import PronosticDetail from '../pages/DetailPronosticPage.vue'
import Login from '../pages/LoginPage.vue'

//Import Admin
import AdmAddPronosticPage from '../pages/Admin/AdmAddPronosticPage.vue'
import AdmListPronostic from '../pages/Admin/AdmListPronosticsPage.vue'
import AdmDetailPronostic from '../pages/Admin/AdmDetailPronosticPage.vue'
import AdmModifyPronosticPage from '../pages/Admin/AdmModifyPronosticPage.vue'

//Competition
import AdmCompetPage from '../pages/Admin/competition/AdminCompetPage.vue'
import AdmAddCompetPage from '../pages/Admin/competition/AdminCompetAddPage.vue'

// Types
import AdmTypePage from '../pages/Admin/type/AdminTypePage.vue'
import AdminTypeAddPage from "@/pages/Admin/type/AdminTypeAddPage";

//Account
import AccountPage from "@/pages/Admin/AccountPage";

// Home
import HomePage from "@/pages/Admin/HomePage.vue";


const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/list-of-pronostics',
        name: 'ListPronostics',
        component: PronosticList
    },
    {
        path: '/detail-pronostics',
        name: 'DetailPronostics',
        component: PronosticDetail
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/adm-add-pronostic',
        name: 'AdmAddPronostic',
        component: AdmAddPronosticPage
    },
    {
        path: '/adm-list-pronostic',
        name: 'AdmListPronostic',
        component: AdmListPronostic
    },
    {
        path: '/adm-detail-pronostic/:id',
        name: 'AdmDetailPronostic',
        component: AdmDetailPronostic
    },
    {
        path: '/adm-modify-pronostic/:id',
        name: 'AdmModifyPronostic',
        component: AdmModifyPronosticPage
    },
    {
        path: '/adm-compet',
        name: 'AdmCompet',
        component: AdmCompetPage
    },
    {
        path: '/adm-compet-add',
        name: 'AdmAddCompet',
        component: AdmAddCompetPage
    },
    {
        path: '/adm-type',
        name: 'AdmTypePage',
        component: AdmTypePage
    },
    {
        path: '/adm-type-add',
        name: 'AdminTypeAddPage',
        component: AdminTypeAddPage
    },
    //tabs
    {
        path: '/admin/',
        component: () => import("../components/TabsComponent.vue"),
        children: [
            {
                path: "",
                redirect: "/admin/home"
            },
            {
                path: "home",
                component: HomePage
            },

            {
                path: "pronostics",
                component: AdmListPronostic
            },
            {
                path: "competitions",
                component: AdmCompetPage
            },
            {
                path: "types",
                component: AdmTypePage
            },
            {
                path: "account",
                component: AccountPage
            },
        ]
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
