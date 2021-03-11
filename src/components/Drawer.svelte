<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	let drawerRef: HTMLDivElement;

	let className = '';
	export { className as class };
	export let visible = false;
	export let dismiss: () => void;

	onMount(() => {
		document.addEventListener('keydown', (key: KeyboardEvent) => {
			if (key.key === 'Escape') {
				dismiss();
			}
		});
	});
</script>

{#if visible}
	<div
		class="bg-transparent-200 absolute top-0 right-0 bottom-0 left-0 flex z-max"
		in:fade={{ easing: quintOut }}
	>
		<div class="flex-1" on:click={dismiss} />
		<div
			bind:this={drawerRef}
			class="bg-100 shadow-md overflow-y-scroll {className}"
			in:fly={{ duration: 400, x: drawerRef.clientWidth }}
		>
			<slot />
		</div>
	</div>
{/if}
