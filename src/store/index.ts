import IProjetos from "@/interfaces/IProjeto";
import { createStore } from "vuex";

interface Estado {
    projetos: IProjetos[]
}

export const store = createStore<Estado>({
    state: {
        projetos: [
            {
                id: new Date().toISOString(),
                nome: 'TypeScript'
            },
            {
                id: new Date().toISOString(),
                nome: 'Vue'
            },
            {
                id: new Date().toISOString(),
                nome: 'Vuex'
            },

        ]
    }
}) 