<!--
@component
### Button

- **variant**: "solid" | "outline" = "solid"
- **color**: "orange" | "blue" | "red" = "orange"
-->
<script lang="ts">
	import { onMount } from 'svelte';

	export let variant: 'solid' | 'outline' = 'solid';
	export let color: 'orange' | 'blue' = 'orange';
	let className = '';
	export { className as class };

	let button: HTMLButtonElement;
	let ripple: HTMLDivElement;

	onMount(() => {
		button.addEventListener('mousedown', (e: MouseEvent) => {
			const size = button.offsetWidth;
			const pos = button.getBoundingClientRect();
			const x = e.pageX - pos.left - size;
			const y = e.pageY - pos.top - size;
			ripple.style.top = y + 'px';
			ripple.style.left = x + 'px';
			ripple.style.width = 2 * size + 'px';
			ripple.style.height = 2 * size + 'px';
			ripple.classList.add('ripple--animate');
		});

		ripple.addEventListener('transitionend', () => {
			ripple.classList.remove('ripple--animate');
		});
	});
</script>

<button
	{...$$props}
	on:click
	bind:this={button}
	class="shadow-md {variant} {variant}-{color} {className}"
>
	<slot />
	<div class="ripple" bind:this={ripple} />
</button>

<style>
	button {
		font-size: 1rem;
		line-height: 1.5rem;
		padding: 0.5rem 1rem;
		position: relative;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		overflow: hidden;
		user-select: none;
		border-radius: 0.5rem;
		transition: background 0.6s;
	}

	button:not(:disabled):hover {
		bottom: 0.5px;
		box-shadow: var(--shadowLG);
	}

	button:disabled {
		opacity: 0.8;
		cursor: auto;
	}

	.solid {
		border: 1px solid transparent;
		color: var(--black);
	}

	.solid:disabled {
		background-color: var(--grey500);
	}

	.solid-orange {
		background-color: var(--orange500);
	}

	.solid-orange:not(:disabled):hover {
		background-color: var(--orange400);
	}

	.solid-blue {
		background-color: var(--blue500);
	}

	.solid-blue:not(:disabled):hover {
		background-color: var(--blue400);
	}

	.outline {
		color: var(--onBackground);
	}

	.outline:disabled {
		border: 1px solid var(--grey500);
	}

	.outline-orange {
		border: 1px solid var(--orange500);
	}

	.outline-orange:not(:disabled):hover {
		background-color: var(--orangeTransparent200);
	}

	.outline-blue {
		border: 1px solid var(--blue500);
	}

	.outline-blue:not(:disabled):hover {
		background-color: var(--blueTransparent200);
	}
</style>
