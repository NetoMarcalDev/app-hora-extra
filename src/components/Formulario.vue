<template>
  <div class="box formulario">
    <div class="columns">
      <div
        class="column is-3"
        role="form"
        aria-label="Formulário para criação de uma nova tarefa"
      >
        <input
          type="text"
          class="input"
          placeholder="Estabelecimento"
          v-model="estabelecimento"
        />        
      </div>
      <div class="column is-3">
        <input
          type="text"
          class="input"
          placeholder="Solicitante"
          v-model="solicitante"
        />        
      </div>
      <div class="column is-2">
        <input
          type="date"
          class="input"
          v-model="dataTarefa"
        />        
      </div>
      <div class="column is-1">
        <input
          type="time"
          class="input"
        />        
      </div>
      <div class="column is-1">
        <input
          type="time"
          class="input"
        />        
      </div>
      <div class="column">
       <Temporirzador @ao-temporizador-finalizado="finalizarTarefa" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Temporirzador from "./Temporirzador.vue";

export default defineComponent({
// eslint-disable-next-line vue/multi-word-component-names
  name: "Formulario", 
  emits: [
    'aoSalvarTarefa'
  ],
  components: {
    Temporirzador
  },
  data () {
    return {
      estabelecimento: '',
      solicitante: '',
      dataTarefa: new Date,
    }
  },
  methods: {
    finalizarTarefa(tempoDecorrido: number) : void {
      this.$emit('aoSalvarTarefa', {
        duracaoEmSegundos: tempoDecorrido,
        estabelecimento: this.estabelecimento,
        solicitante: this.solicitante,
        dataTarefa: this.dataTarefa
      });
      this.estabelecimento = '';
      this.solicitante = '';
      console.log(this.dataTarefa)
    }
  }
});
</script>

<style>
  .formulario {
    color: var(--texto-primario);
    background-color: var(--bg-primario);
  }
</style>