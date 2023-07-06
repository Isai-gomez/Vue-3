import axios from 'axios'
import { ref } from 'vue'
export const getPokemon = (idPokemon = 1) => {
  const pokemon = ref()
  const isLoading = ref(false)
  const messageError = ref()

  const searchPokemonId = async (id) => {
    if(!id) return
    isLoading.value = true
    pokemon.value = null
    try {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      pokemon.value = data
      messageError.value = null
    } catch (error) {
      messageError.value = 'Error al optener la api' + id;
    }
    isLoading.value = true
  }
  searchPokemonId(idPokemon)
  return {
    pokemon,
    isLoading,
    messageError,
    searchPokemonId
  }
}
