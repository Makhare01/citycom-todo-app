<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import TodoForm from '$lib/components/todo/TodoForm.svelte';
	import { todoStore } from '$lib/store/todos';
	import type { TodoPriority } from '$lib/types';
	import { format } from 'date-fns';

	const { todoId } = $page.params as { todoId: string };

	const currentTodo = $state($todoStore.find((todo) => todo._id === todoId));

	const onSubmit = (formValues: { title: string; endDate: string; priority: TodoPriority }) => {
		if (currentTodo) {
			todoStore.editTodo({
				_id: currentTodo._id,
				title: formValues.title,
				completed: currentTodo.completed,
				completeDate: currentTodo.completeDate,
				expireDate: new Date(formValues.endDate),
				priority: formValues.priority
			});
		}

		goto('/todos');
	};
</script>

<TodoForm
	defaultValues={{
		title: currentTodo?.title ?? '',
		endDate: currentTodo?.expireDate ? format(currentTodo.expireDate, 'MM/dd/yyy') : '',
		priority: currentTodo?.priority ?? 'LOW'
	}}
	submitText="Edit"
	on:submit={(formValues) => onSubmit(formValues.detail)}
/>
