import { createRouter, createWebHashHistory } from "vue-router"
import CreateView from "@/views/CreateView"

const routes = [
    {
        path: '/',
        name: 'home',
        component: ''
    },
    {
        path: '/item/adicionar',
        name: 'ItemCreate',
        component: CreateView,
    },
    {
        path: '/item/:id',
        name: 'ItemEdit',
        component: CreateView
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
