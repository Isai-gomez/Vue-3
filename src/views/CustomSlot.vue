<template>
	<div>
		<h2>Aprendiendo slot</h2>
		<button @click="openModal">Abrir modal</button>
		<modal v-if="isOpen" title="titulo modal" @on:close="closeModal">
			<template v-slot:header>
				<h2>Titulo del modal</h2>
			</template>
			<template v-slot:body>
				<p>
					Al contrario del pensamiento popular, el texto de Lorem Ipsum no es
					simplemente text
				</p>
			</template>
			<template v-slot:footer>
				<button @click="closeModal">Salir</button>
			</template>
		</modal>
	</div>
</template>
<script>
import Modal from '../component/Modal.vue';
import {ref} from 'vue'
export default {
	components: { Modal },
	setup(props, context) {
		const isOpen = ref(false);
		return {
			isOpen,
			openModal: () => (isOpen.value = true),
			closeModal: () => (isOpen.value = false),
		};
	},
};
</script>
<style lang=""></style>
