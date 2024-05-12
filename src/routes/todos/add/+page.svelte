<script lang="ts">
	import { goto } from '$app/navigation';
	import TodoForm from '$lib/components/todo/TodoForm.svelte';
	import { todoStore } from '$lib/store/todos';
	import type { TodoPriority } from '$lib/types';

	const onSubmit = (formValues: { title: string; endDate: string; priority: TodoPriority }) => {
		todoStore.addTodo({
			_id: self.crypto.randomUUID(),
			title: formValues.title,
			completed: false,
			completeDate: null,
			expireDate: new Date(formValues.endDate),
			priority: formValues.priority
		});

		goto('/todos');
	};
</script>

<TodoForm
	defaultValues={{ title: '', endDate: '', priority: 'LOW' }}
	on:submit={(formValues) => onSubmit(formValues.detail)}
/>
