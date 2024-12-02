import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Tarrefas from "@/views/Tarrefas.vue";
import Projetos from "@/views/Projetos.vue";

const rotas: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Tarefas',
        component: Tarrefas
    },
    {
        path: '/projetos',
        name: 'Projetos',
        component: Projetos
    },
];

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
});

export default roteador;