<script lang="ts">
	import { todoStore } from '$lib/store/todos';
	import type { TodoPriority } from '$lib/types';
	import { registerables, type ChartType } from 'chart.js';
	import Chart from 'chart.js/auto';
	import { fade } from 'svelte/transition';

	let ctx: HTMLCanvasElement | undefined;
	let chart: Chart | undefined;

	const labels: Array<TodoPriority> = ['LOW', 'MEDIUM', 'HIGH'];
	const backgroundColor: Array<string> = ['#0065FF', '#FFAB00', '#FF5630'];

	Chart.register(...registerables);

	const lowTodos = $todoStore.filter((todo) => todo.priority === 'LOW').length;
	const mediumTodos = $todoStore.filter((todo) => todo.priority === 'MEDIUM').length;
	const highTodos = $todoStore.filter((todo) => todo.priority === 'HIGH').length;

	$effect(() => {
		if (chart) {
			chart.destroy();
		}

		if (ctx) {
			chart = new Chart(ctx, {
				type: 'pie' as ChartType,
				data: {
					labels,
					datasets: [
						{
							data: [lowTodos, mediumTodos, highTodos],
							borderWidth: 2,
							backgroundColor
						}
					]
				},
				options: {
					responsive: true,
					plugins: {
						legend: {
							position: 'top'
						},
						title: {
							display: true,
							text: 'Todo Priorities Chart'
						}
					}
				}
			});
		}
	});
</script>

<div class="p-3 border md:w-auto w-full">
	<canvas bind:this={ctx} class="max-w-[400px] max-h-[500px]" in:fade></canvas>
</div>
