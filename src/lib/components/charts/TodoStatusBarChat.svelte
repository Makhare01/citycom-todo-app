<script lang="ts">
	import { todoStore } from '$lib/store/todos';
	import { registerables, type ChartType } from 'chart.js';
	import Chart from 'chart.js/auto';
	import { isPast } from 'date-fns';
	import { fade } from 'svelte/transition';

	let ctx: HTMLCanvasElement | undefined;
	let chart: Chart | undefined;

	const labels: Array<string> = ['Finished', 'Current', 'Expired'];

	Chart.register(...registerables);

	const finishedTodos = $todoStore.filter((todo) => todo.completed).length;
	const currentTodos = $todoStore.filter(
		(todo) => !todo.completed && !isPast(new Date(todo.expireDate))
	).length;
	const expiredTodos = $todoStore.filter(
		(todo) => !todo.completed && isPast(new Date(todo.expireDate))
	).length;

	$effect(() => {
		if (chart) {
			chart.destroy();
		}

		if (ctx) {
			chart = new Chart(ctx, {
				type: 'bar' as ChartType,
				data: {
					labels,
					datasets: [
						{
							data: [finishedTodos, currentTodos, expiredTodos],
							borderWidth: 2
						}
					]
				},
				options: {
					maintainAspectRatio: false,
					responsive: true,
					plugins: {
						legend: {
							display: false
						},
						title: {
							display: true,
							text: 'Todo Status Bar Chart'
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
