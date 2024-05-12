<script lang="ts">
	const { title }: { title: string } = $props();
</script>

<!-- svelte-ignore slot_element_deprecated -->
<div class="relative inline-block group">
	<span
		class="invisible p-1 px-2 bg-gray-300 text-white text-center rounded absolute z-10 group-hover:visible -top-8 left-1/2 -translate-x-1/2"
		>{title}</span
	>
	<slot />
</div>
