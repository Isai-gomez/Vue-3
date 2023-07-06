<template>
  <h2 v-if="isLoading">Cargando usuarios ....</h2>
  
  <h3 v-else-if="errorMessage">{{ errorMessage }}
    <button style="
    margin: 0 1rem 0 0; display: block;" @click="indexPage">Go back page {{ 1}}</button>
  </h3>
  <div v-else>
    <h2 >Usuarios</h2>
    <button style="
    margin: 0 1rem 0 0;" @click="pagePrevious">Go back page {{ currenPage }}</button>
    <span>pagina:{{ currenPage }}</span>
    <button style="
    margin: 0 0 0 1rem ;" @click="nextPage">Next page {{ currenPage }}</button>
    <div
      class="container-avatar"
      v-for="{ id, email, first_name, last_name, avatar } in users"
      :key="{ id }"
    >
      <img :src="avatar" :alt="avatar" />
      <div>
        <h4>
          <strong>Nombre:</strong>
          <i>{{ first_name }} {{ last_name }}</i>
        </h4>
        <h6>
          <strong>Email:</strong>
          <i>{{ email }}</i>
        </h6>
      </div>
    </div>
  </div>
</template>

<script>
import { useUsers } from '../composables/useUsers'
export default {
  name: 'Users',
  props: {},
  setup() {
    const {
      isLoading,
      users,
      errorMessage,
      currenPage,
      nextPage,
      pagePrevious,
      indexPage
    } = useUsers()
    return {
      isLoading,
      users,
      errorMessage,
      currenPage,
      nextPage,
      pagePrevious,
      indexPage
    }
  },
}
</script>

<style scoped>
div,
h2,
h3,
h4 {
  color: white;
}
img {
  border-radius: 50%;
}
.container-avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 1rem;
}
</style>
