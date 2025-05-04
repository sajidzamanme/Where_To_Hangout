import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import AdminPanelView from "@/views/AdminPanelView.vue";
import AdminPanelAddView from "@/views/AdminPanelAddView.vue";
import AdminPanelRemoveView from "@/views/AdminPanelRemoveView.vue";

const router = createRouter ({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes : [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView,
        },
        {
            path: '/admin-panel',
            name: 'adminPanel',
            component: AdminPanelView,
        },
        {
            path: '/admin-panel/add',
            name: 'adminPanelAdd',
            component: AdminPanelAddView,
        },
        {
            path: '/admin-panel/remove',
            name: 'adminPanelRemove',
            component: AdminPanelRemoveView,
        },
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: NotFoundView,
        }
    ],
});

export default router;