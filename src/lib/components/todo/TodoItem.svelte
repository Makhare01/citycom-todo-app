<script lang="ts">
	import type { Todo } from '$lib/types';
	import iconEdit from '$lib/icons/icon-edit.png';
	import iconDelete from '$lib/icons/icon-delete.png';
	import clsx from 'clsx';
	import { formatDate, todoPriorities } from '$lib/utils';
	import Tooltip from '../Tooltip.svelte';
	import { todoStore } from '$lib/store/todos';

	const { ...todo }: Todo = $props();
	const todoPriority = todoPriorities[todo.priority];
</script>

<div class="w-full bg-white p-3 rounded-lg flex items-start gap-3">
	<Tooltip title={todoPriority.name}>
		<img src={todoPriority.icon} alt={todoPriority.name} class="w-6" />
	</Tooltip>

	<div class="flex items-start justify-between w-full gap-8">
		<div class="flex items-start gap-5">
			<input
				onchange={() => {
					todoStore.editTodo({ ...todo, completed: !todo.completed, completeDate: new Date() });
				}}
				checked={todo.completed}
				type="checkbox"
				class="min-w-6 min-h-6 appearance-none rounded-full bg-gray-100 cursor-pointer checked:bg-green-300 checked:border-transparent border border-gray-200"
			/>
			<div>
				<p
					class={clsx('text-md font-semibold', {
						'line-through': todo.completed
					})}
				>
					{todo.title}
				</p>

				{#if todo.completed && todo.completeDate}
					<p class="text-sm text-gray-400">Completed date: {formatDate(todo.completeDate)}</p>
				{:else}
					<p class="text-sm text-gray-400">Expire date: {formatDate(todo.expireDate)}</p>
				{/if}
			</div>
		</div>
		<div class="flex items-center gap-3 min-w-[60px]">
			<a href={`/todos/${todo._id}/edit`}>
				<img src={iconEdit} alt="Edit icon" class="w-6 cursor-pointer" />
			</a>
			<button
				onclick={() => {
					todoStore.deleteTodo(todo._id);
				}}
			>
				<img src={iconDelete} alt="Delete icon" class="w-6" />
			</button>
		</div>
	</div>
</div>
