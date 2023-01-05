<template>
  <h2 v-if="isLoading">Cargando usuarios ....</h2>
  <h2 v-else>Usuarios</h2>
  <h3 v-if="errorMessage">{{ errorMessage }}</h3>
  <div>
    <button @click="pagePrevious">Go back page {{ currenPage }}</button>
    <span>pagina:{{ currenPage }}</span>
    <button @click="nextPage">Next page {{ currenPage }}</button>
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
    } = useUsers()
    return {
      isLoading,
      users,
      errorMessage,
      currenPage,
      nextPage,
      pagePrevious,
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
