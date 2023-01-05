<template>
  <h1>{{ counter }}</h1>
  <button @click="increase">+1</button>
  <button @click="decrease">-1</button>
</template>

<script>
import { useCounter } from '../composables/useCounter'
export default {
  name: 'Counter',
  props: {},
  emits: {},
  setup() {
    const [{ counter }, { decrease }, { increase }] = useCounter(34)

    return {
      counter,
      increase,
      decrease,
    }
  },
}
</script>

<style></style>
