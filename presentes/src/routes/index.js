import { createRouter, createWebHashHistory } from "vue-router"
import CreateView from "@/views/CreateView"

const routes = [
    { path: '/', name: 'home', component: '' },
    { path: '/adicionar', name: 'add', component: CreateView },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
