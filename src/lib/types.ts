import type { HTMLInputAttributes } from 'svelte/elements';

export type Tab = {
	tabId: number;
	title: string;
	path: string;
};

export type InputProps = HTMLInputAttributes & {
	containerClass?: string;
};

export type TodoPriority = 'LOW' | 'MEDIUM' | 'HIGH';

export type Todo = {
	_id: string;
	title: string;
	expireDate: Date;
	completeDate: Date | null;
	priority: TodoPriority;
	completed: boolean;
};

export type TodoFormValues = { title: string; endDate: string; priority: TodoPriority };
