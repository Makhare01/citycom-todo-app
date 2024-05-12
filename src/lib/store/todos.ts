import { browser } from '$app/environment';
import type { Todo } from '$lib/types';
import { writable } from 'svelte/store';

type Todos = Array<Todo>;

const createTodos = () => {
	const defaultValues = (browser && localStorage.getItem('todos')) || '[]';
	const { subscribe, update } = writable<Todos>(JSON.parse(defaultValues));

	const updateTodo = (updatedTodo: Todo, allTodos: Todos) => {
		if (browser) {
			const leftTodos = allTodos.filter((todo) => todo._id !== updatedTodo._id);
			const updatedTodos = [...leftTodos, updatedTodo];
			localStorage.todos = JSON.stringify(updatedTodos);
			return updatedTodos;
		}

		return allTodos;
	};

	return {
		subscribe,
		addTodo: (todo: Todo) => {
			if (browser) {
				return update((prevTodos) => {
					const newTodos = [...prevTodos, todo];
					localStorage.todos = JSON.stringify(newTodos);
					return newTodos;
				});
			}
		},
		editTodo: (updatedTodo: Todo) => {
			update((prevTodos) => {
				const updatedTodos = updateTodo(updatedTodo, prevTodos);

				return updatedTodos;
			});
		},
		deleteTodo: (todoId: string) => {
			if (browser) {
				return update((prevTodos) => {
					const updatedTodos = prevTodos.filter((todo) => todo._id !== todoId);
					localStorage.todos = JSON.stringify(updatedTodos);

					return updatedTodos;
				});
			}
		}
	};
};

export const todoStore = createTodos();
