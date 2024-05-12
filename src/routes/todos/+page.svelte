<script lang="ts">
	import { goto } from '$app/navigation';
	import TodoList from '$lib/components/todo/TodoList.svelte';
	import { todoStore } from '$lib/store/todos';
	import { sortByPriority } from '$lib/utils';

	const total = $state($todoStore.length);
	const completed = $state($todoStore.filter((todo) => todo.completed).length);
</script>

<div class="w-full">
	<div class="flex items-center justify-between max-w-xl">
		<p class="text-xl font-semibold text-primary-text">
			Todo Done: <span class="font-bold text-black">{`${completed}/${total}`}</span>
		</p>
		<button
			onclick={() => {
				goto('/todos/add');
			}}
			class="p-2 px-3 rounded-md bg-success-bg hover:bg-green-200 text-primary-text font-bold mb-3 transition delay-150"
		>
			Add Todo
		</button>
	</div>

	{#if $todoStore.length > 0}
		<TodoList todos={$todoStore.sort(sortByPriority)} />
	{/if}
</div>
