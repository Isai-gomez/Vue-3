<template>
  <h2 v-if="!pokemon && !messageError">Buscando ......</h2>
  <h2 v-else-if="messageError">{{ messageError }}</h2>
  <template v-else>
    <h3>{{ pokemon.name }}</h3>
  </template>
</template>

<script>
import { useRoute } from 'vue-router'
import { getPokemon } from '../composables/usePokemon'
export default {
  setup() {
    const route = useRoute()

    console.log(route.params.id, 'En pokemon')
    const { pokemon, isLoading, messageError } = getPokemon(route.params.id)
    return {
      pokemon,
      isLoading,
      messageError,
    }
  },
}
</script>

<style></style>
