import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Tarrefas from "@/views/Tarrefas.vue";

const rotas: RouteRecordRaw[] = [{
    path: '/',
    name: 'Tarefas',
    component: Tarrefas
}];

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
});

export default roteador;