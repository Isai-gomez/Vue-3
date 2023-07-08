<template lang="es">
    <h1>Lista de tareas de tanos</h1>
	<div>
        <button @click="currenTag='all'" :class="{'active':currenTag === 'all'}">Todas</button>
        <button @click="currenTag='pending'" :class="{'active':currenTag === 'pending'}">Pendientes</button>
        <button @click="currenTag='completed'" :class="{'active':currenTag === 'completed'}">Completadas</button>
        <ul v-for="{id, text, completed} in getTodosByTag " :key="id">
            <li @dblclick="toggleTodo(id)" :class="{'completed': completed}">{{text}}</li>
        </ul>

	</div>
</template>
<script>
import  useTodos  from '../composables/useTodos.js';
export default {
	setup() {
		const { currenTag, toggleTodo, getTodosByTag } = useTodos();
        return  {currenTag, toggleTodo, getTodosByTag}
	},
};
</script>
<style scope>
div {
	width: 100%;
	text-align: center;
}
ul {
	display: flex;
	flex-direction: column;
	text-align: left;
}
li {
	text-align: left;
}
.active {
	background-color: #2c3e50;
	color: white;
}
.completed {
	text-decoration: line-through;
}
</style>
