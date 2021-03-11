<script>
	import Button from './Button.svelte';
	import { authMode } from '../store/authStore';
</script>

<header class="px-1 py-0.5 flex bg-200 justify-between align-center">
	<h1>Brand</h1>

	<Button
		variant="outline"
		class="ml-auto mr-0.5"
		on:click={() => authMode.setAuthMode('login')}>Log In</Button
	>
	<Button on:click={() => authMode.setAuthMode('signup')}>Sign Up</Button>
</header>
