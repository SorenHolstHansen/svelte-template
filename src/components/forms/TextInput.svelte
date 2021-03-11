<script lang="ts">
	export let password = false;
	export let label: string;
	export let id: string;

	$: type = password ? 'password' : 'text';
</script>

<label for={id} class="block mb-0.25 mt-1">{label}</label>
<input
	{...$$props}
	{type}
	{id}
	class="block w-full py-0.5 px-1 bg-200 rounded-0.5 text-1"
/>

<style>
	input {
		outline: 0;
		box-shadow: 0px 0px 0px 0.5px var(--grey400);
	}

	input:not(:disabled):focus {
		box-shadow: 0px 0px 0px 1px var(--orange500);
	}
</style>
