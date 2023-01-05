<template>
  <div class="home">
    <h2>Ref vs Ractive</h2>
    <p>{{ iroman }}</p>
    <p>{{ hulk }}</p>
    <button @click="setIroman">Cambiar iroman</button>
    <button @click="setHulk">Cambiar hulk</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref, reactive } from 'vue'
export default {
  name: 'Home',
  setup() {
    const iroman = ref({ name: 'Tony', age: 56 })
    const hulk = reactive({ name: 'Bruce', age: 23 })
    return {
      iroman,
      hulk,
      setIroman: () => {
        iroman.value.name = 'Tony Start'
        iroman.value.age = 40
      },
      setHulk: () => {
        hulk.name = 'Bruce Baner'
        hulk.age = 33
      },
    }
  },
}
</script>
