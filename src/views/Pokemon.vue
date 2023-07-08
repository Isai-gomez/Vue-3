<template>
	<h2 v-if="!pokemon && !messageError">Buscando pokemon con id {{ $route.params.id }}......</h2>
	<h2 v-else-if="messageError">{{ messageError }}</h2>
	<template v-else>
		<h3>Nombre: {{ pokemon.name}}</h3>
		<img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
		<br />
		<router-link :to="{ name: 'Pokemon' }">Regresar</router-link>
	</template>
</template>

<script>
import { useRoute, onBeforeRouteLeave } from 'vue-router';
import { watch } from 'vue';
import { getPokemon } from '../composables/usePokemon';
export default {
	setup() {
		const route = useRoute();
		const { pokemon, isLoading, messageError, searchPokemonId } = getPokemon(
			route.params.id
		);
		watch(
			() => route.params.id,
			() => searchPokemonId(route.params.id)
		);
		onBeforeRouteLeave(() => {
			const answer = window.confirm("Estas seguro que quiere salir?")
      if(!answer) return false
		});
		return {
			pokemon,
			isLoading,
			messageError,
		};
	},
};
</script>

<style></style>
