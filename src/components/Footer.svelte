<script lang="ts">
	import Button from './Button.svelte';
	import { theme } from '../store/themeStore';
</script>

<div class="bg-200 p-1">
	<Button on:click={theme.toggleTheme}>Toggle Theme</Button>
</div>
