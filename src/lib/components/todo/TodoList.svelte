<script lang="ts">
	import type { Todo } from '$lib/types';

	import TodoItem from './TodoItem.svelte';

	const { todos }: { todos: Array<Todo> } = $props();
</script>

<div class="w-full max-w-xl rounded-md bg-gray-100 p-5 mt-5 flex flex-col gap-3">
	{#each todos as todo}
		<TodoItem {...todo} />
	{/each}
</div>
