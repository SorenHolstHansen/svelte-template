<script lang="ts">
	import Drawer from './Drawer.svelte';
	import { authMode } from '../store/authStore';
	import TextInput from './forms/TextInput.svelte';
	import Button from './Button.svelte';
</script>

<Drawer
	visible={$authMode !== 'none'}
	dismiss={() => authMode.setAuthMode('none')}
	class="p-1"
>
	{#if $authMode === 'login'}
		<h1 class="text-center mb-1">Log In</h1>

		<form>
			<TextInput
				label="Username or Email"
				id="usernameOrEmail"
				placeholder="Username or Email"
			/>

			<TextInput
				label="Password"
				id="password"
				placeholder="Password"
				password
			/>

			<Button type="submit" class="mt-1.5 w-full">Log in</Button>
		</form>

		<hr class="mt-2 mb-0.5" />
		<div class="flex justify-around mb-1">
			<a href="/forgot-password" class="text-0.75">Forgot Password?</a>
			<button class="text-0.75" on:click={() => authMode.setAuthMode('signup')}
				>Create Account</button
			>
		</div>
	{/if}

	{#if $authMode === 'signup'}
		<h1 class="text-center mb-1">Sign Up</h1>

		<form>
			<TextInput label="Username" id="username" placeholder="Username" />

			<TextInput label="Email" id="email" placeholder="Email" />

			<TextInput
				label="Password"
				id="password"
				placeholder="Password"
				password
			/>

			<Button type="submit" class="mt-1.5 w-full">Sign Up</Button>
		</form>

		<hr class="mt-2 mb-0.5" />
		<div class="flex justify-around mb-1">
			<button class="text-0.75" on:click={() => authMode.setAuthMode('login')}
				>Already have an account?</button
			>
		</div>
	{/if}
</Drawer>
