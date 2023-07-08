import { computed, ref } from 'vue';
import { useStore } from 'vuex';
const useTodos = () => {
	const currenTag = ref('all');
	const store = useStore();
	return {
		currenTag,
		toggleTodo: id => store.commit('toggleTagCompleted', id),
		getTodosByTag: computed(() =>
			store.getters['getTodosByTag'](currenTag.value)
		),
	};
};

export default useTodos;
