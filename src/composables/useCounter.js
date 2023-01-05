import { ref } from 'vue'

export const useCounter = (initValue = 0) => {
  const counter = ref(initValue)
  return [
    { counter },
    { decrease: () => (document.title = counter.value--) },
    { increase: () => (document.title = counter.value++) },
  ]
}
