<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
    |
    <router-link :to="{ name: 'Counter' }">Counter</router-link>
    |
    <router-link :to="{ name: 'Users' }">Usuorios</router-link>
    |
    <router-link :to="{ name: 'Pokemon' }">Buscar</router-link>
    |
    <router-link :to="{ name: 'todo' }">todo</router-link>
    |
    <router-link :to="{ name: 'slot' }">Slot</router-link>
  </div>
  <router-view v-slot="{ Component, route }">
    <keep-alive>
      <component :is="Component" :key="route.name"></component>
    </keep-alive>
  </router-view>
</template>

<style>
html, body{
  color: white;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
}

#nav {
  padding-top: 30px;
}

#nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
body,html {
  background: #1e2934;
  color: white;
}
</style>
