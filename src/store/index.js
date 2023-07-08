import { createStore } from 'vuex';

export default createStore({
	state: {
		todos: [
			{
				id: '1',
				text: 'Recolectar las pierdras del infinito',
				completed: false,
			},
			{ id: '2', text: 'Buscar a mis hijas', completed: false },
			{ id: '3', text: 'RMatar a los vengadores', completed: false },
			{ id: '4', text: 'Viajar a la tierra', completed: false },
			{ id: '5', text: 'Crear guantes para la gemas', completed: true },
			{
				id: '6',
				text: 'Reclutar ecuaces competentes para mi ejercito',
				completed: true,
			},
		],
	},
	mutations: {
		toggleTagCompleted(state, id) {
			const index = state.todos.findIndex(todo => todo.id === id);
			state.todos[index].completed = !state.todos[index].completed;
		},
	},
	actions: {},
	modules: {},
	getters: {
		completedTodos(state) {
			return state.todos.filter(todo => todo.completed);
		},
		todosNoCompleted(state) {
			return state.todos.filter(todo => !todo.completed);
		},
		allTodos(state) {
			return [...state.todos];
		},
		getTodosByTag: (_, getters) => tag => {
			switch (tag) {
				case 'all':
					return getters.allTodos;
				case 'pending':
					return getters.todosNoCompleted;
				case 'completed':
					return getters.completedTodos;
			}
		},
	},
});
