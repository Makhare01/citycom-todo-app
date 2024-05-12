import type { Todo, TodoPriority } from './types';
import iconLowPriority from '$lib/icons/priorities/low.svg';
import iconMediumPriority from '$lib/icons/priorities/medium.svg';
import iconHighPriority from '$lib/icons/priorities/high.svg';
import { format } from 'date-fns';

export const todoPriorities: Record<TodoPriority, { name: string; icon: string }> = {
	LOW: {
		name: 'Low',
		icon: iconLowPriority
	},
	MEDIUM: {
		name: 'Medium',
		icon: iconMediumPriority
	},
	HIGH: {
		name: 'High',
		icon: iconHighPriority
	}
};

export const priorityOrder: Record<TodoPriority, number> = { HIGH: 0, MEDIUM: 1, LOW: 2 };

export const sortByPriority = (a: Todo, b: Todo): number => {
	return priorityOrder[a.priority] - priorityOrder[b.priority];
};

export const formatDate = (date: Date) => format(date, 'd MMMM y');
