<template>
  <h2>Buscador de pokemon {{ pokemonId }}</h2>
  <form @submit.prevent="onSumit">
    <input
      type="number"
      placeholder="Numero de pokemon"
      ref="textSearchId"
      v-model="pokemonId"
    />
  </form>
</template>

<script>
import { ref, onActivated } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'pokemonSearch',
  props: {},
  setup() {
    const router = useRouter()
    const textSearchId = ref()
    const pokemonId = ref(1)
    onActivated(() => {
      textSearchId.value.select()
    })

    return {
      pokemonId,
      onSumit: () => {
        router.push({ name: 'Pokemon-id', params: { id: pokemonId.value } })
      },
      textSearchId,
    }
  },
}
</script>

<style></style>
