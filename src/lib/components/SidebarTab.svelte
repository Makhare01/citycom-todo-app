<script lang="ts">
	import type { Tab } from '$lib/types';
	import { page } from '$app/stores';
	import clsx from 'clsx';

	const { path, title }: Tab = $props();
	const isActive = $state($page.url.pathname.includes(path));
</script>

<div
	class={clsx('flex p-2 border-l-[6px] border-transparent', {
		'border-l-[#01b297] text-red-500': $page.url.pathname.includes(path)
	})}
>
	<a
		href={path}
		class={clsx('font-medium text-primary-text', {
			'text-primary-main': $page.url.pathname.includes(path)
		})}
	>
		{title}
	</a>
</div>
