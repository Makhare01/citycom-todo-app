<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
</script>

<svelte:head>
	<title>Citycom Todo app</title>
</svelte:head>

<Header />
<div class="container mx-auto h-full p-3">
	<div class="flex gap-10 items-start flex-col md:flex-row">
		<Sidebar />
		<slot />
	</div>
</div>
