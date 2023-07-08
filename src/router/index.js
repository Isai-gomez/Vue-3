import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/counter',
    name: 'Counter',
    component: () =>
      import(/* webpackChunkName: "Counter" */ '../views/Counter.vue'),
  },
  {
    path: '/usuario',
    name: 'Users',
    component: () =>
      import(/* webpackChunkName: "Users" */ '../views/User.vue'),
  },
  {
    path: '/pokemon',
    name: 'Pokemon',
    component: () =>
      import(
        /* webpackChunkName: "Pokemon Search" */ '../views/PokemonSearch.vue'
      ),
  },
  {
    path: '/pokemon:id',
    name: 'Pokemon-id',
    component: () =>
      import(/* webpackChunkName: "Pokemon" */ '../views/Pokemon.vue'),
  },
  {
    path: '/todo',
    name: 'todo',
    component: () =>
      import(/* webpackChunkName: "todo tanos" */ '../views/ListOfTodoTanos.vue'),
  },
  {
    path: '/slot',
    name: 'slot',
    component: () =>
      import(/* webpackChunkName: "slot" */ '../views/CustomSlot.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
