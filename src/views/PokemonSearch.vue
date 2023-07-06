<template>
  <h2>Pulsa enter para burcar pokemon con id {{ pokemonId }}</h2>
  <form @submit.prevent="onSumit">
    <input
      type="number"
      placeholder="Id de pokemon "
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
    const pokemonId = ref()
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
