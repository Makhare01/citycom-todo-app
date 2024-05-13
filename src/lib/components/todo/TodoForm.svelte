<script lang="ts">
	import type { TodoFormValues, TodoPriority } from '$lib/types';
	import { todoPriorities } from '$lib/utils';
	import { createEventDispatcher } from 'svelte';
	import arrowLeftImage from '$lib/icons/arrow-left.png';

	const {
		defaultValues,
		submitText = 'Add'
	}: { defaultValues: TodoFormValues; submitText?: string } = $props();

	const priorities = $state(Object.keys(todoPriorities) as Array<TodoPriority>);

	const formValues: TodoFormValues = {
		...defaultValues
	};

	const dispatch = createEventDispatcher();
</script>

<form
	onsubmit={(event) => {
		event.preventDefault();
		dispatch('submit', formValues);
	}}
	class="w-full md:max-w-sm"
>
	<a href="/todos" class="group">
		<div class="flex items-center gap-2 mb-2">
			<img src={arrowLeftImage} alt="Back" class="h-6" />
			<p class="text-sm text-primary-text group-hover:text-primary-main">Back to todo list</p>
		</div>
	</a>
	<p class="text-lg font-semibold mb-3">Add todo</p>
	<div>
		<p class="text-md ml-1 mb-1">Title</p>
		<input
			placeholder="Title"
			bind:value={formValues.title}
			required
			class="p-2 px-4 border w-full border-divider rounded-lg placeholder-divider focus:outline-none h-11"
		/>
	</div>

	<div class="mt-3">
		<p class="text-md ml-1 mb-1">End date</p>
		<input
			type="date"
			required
			bind:value={formValues.endDate}
			class="p-2 px-4 border w-full border-divider rounded-lg placeholder-divider focus:outline-none h-11"
		/>
	</div>

	<div class="mt-3">
		<p class="text-md ml-1 mb-1">Priority</p>
		<select
			name="priority"
			class="appearance-none p-2 px-4 border w-full border-divider rounded-lg bg-transparent"
			bind:value={formValues.priority}
		>
			{#each priorities as priority}
				<option value={priority}>{todoPriorities[priority].name}</option>
			{/each}
		</select>
	</div>

	<button type="submit" class="p-2 bg-success-bg rounded-lg px-4 mt-4 w-full">{submitText}</button>
</form>
