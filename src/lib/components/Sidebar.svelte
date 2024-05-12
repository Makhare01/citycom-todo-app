<script lang="ts">
	import type { Tab } from '$lib/types';
	import SidebarTab from './SidebarTab.svelte';

	const tabs: Array<Tab> = [
		{
			tabId: 1,
			title: 'Todos',
			path: '/todos'
		},
		{
			tabId: 2,
			title: 'Statistics',
			path: '/statistics'
		}
	];
</script>

<div class="min-w-[200px] flex flex-col gap-5">
	{#each tabs as tab}
		<SidebarTab {...tab} />
	{/each}
</div>
