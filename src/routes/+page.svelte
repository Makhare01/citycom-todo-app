<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	$effect(() => {
		if ($page.url.pathname === '/') goto('/todos');
	});
</script>
