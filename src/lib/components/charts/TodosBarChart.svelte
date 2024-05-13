<script lang="ts">
	import Chart, { type ChartType } from 'chart.js/auto';
	import { todoStore } from '$lib/store/todos';
	import { format } from 'date-fns';

	let chart: Chart | undefined;

	$effect(() => {
		if (chart) {
			chart.destroy();
		}

		const ctx = (document.getElementById('chart') as HTMLCanvasElement).getContext('2d');
		const todoCounts: any = {};
		$todoStore.forEach((todo) => {
			const expireDate = format(new Date(todo.expireDate), 'dd LLL');
			todoCounts[expireDate] = (todoCounts[expireDate] || 0) + 1;
		});

		const labels = Object.keys(todoCounts);
		const data = Object.values(todoCounts) as Array<number>;

		if (ctx) {
			chart = new Chart(ctx, {
				type: 'bar' as ChartType,
				data: {
					labels: labels,
					datasets: [
						{
							label: 'Todo quantity expired at this date',
							data: data,
							backgroundColor: 'rgba(75, 192, 192, 0.2)',
							borderColor: 'rgba(75, 192, 192, 1)',
							borderWidth: 1
						}
					]
				},
				options: {
					scales: {
						x: {
							display: true,
							title: {
								display: true,
								text: 'Expiration Date'
							}
						},
						y: {
							display: true,
							title: {
								display: true,
								text: 'Todo quantity'
							}
						}
					}
				}
			});
		}
	});
</script>

<div class="p-3 border w-full">
	<canvas id="chart"></canvas>
</div>
