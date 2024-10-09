<template>
    <Box>
        <div class="columns">
            <div class="column is-3">
                {{ tarefa.estabelecimento || 'Estabelecimento não informado' }}
            </div>
            <div class="column is-3">
                <label for="Solicitante: ">
                    {{ tarefa.solicitante || 'Solcitante não informado' }}
                </label>
            </div>
            <div class="column is-3">
                {{ tarefa.dataTarefa }}
            </div>
            <div class="column">
                <Cronometro :tempoEmSegundos="tarefa.duracaoEmSegundos" />
            </div>
        </div>
    </Box>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Cronometro from './Cronometro.vue';
import ITarefa from '@/interfaces/ITarefas';
import Box from './Box.vue';

export default defineComponent({
// eslint-disable-next-line vue/multi-word-component-names
    name: 'Tarefa',
    components: {
        Cronometro,
        Box
    },
    props: {
        tarefa: {
            type: Object as PropType<ITarefa>,
            required: true  
        }
    }
})
</script>