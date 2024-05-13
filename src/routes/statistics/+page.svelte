<script lang="ts">
	import PriorityPieChart from '$lib/components/charts/PriorityPieChart.svelte';
	import TodoStatusBarChat from '$lib/components/charts/TodoStatusBarChat.svelte';
	import TodosBarChart from '$lib/components/charts/TodosBarChart.svelte';
</script>

<div class="flex gap-5 flex-wrap mb-5">
	<PriorityPieChart />
	<TodoStatusBarChat />
	<TodosBarChart />
</div>
