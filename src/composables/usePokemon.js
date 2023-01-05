import axios from 'axios'
import { ref } from 'vue'
export const getPokemon = (id = 1) => {
  const pokemon = ref()
  const isLoading = ref(false)
  const messageError = ref()
  const searchPokemonId = async () => {
    isLoading.value = true
    pokemon.value = null
    try {
      const { data } = await axios('https://pokeapi.co/api/v2/pokemon/', {
        params: { id },
      })
      pokemon.value = data
      messageError.value = null
      console.log(data)
    } catch (error) {
      messageError.value = 'Error al optener la api'
    }
  }
  searchPokemonId()
  return {
    pokemon,
    isLoading,
    messageError,
  }
}
