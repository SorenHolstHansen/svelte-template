<script lang="ts">
	import AuthDrawer from './components/AuthDrawer.svelte';
	import Button from './components/Button.svelte';
	import Footer from './components/Footer.svelte';
	import Header from './components/Header.svelte';
	import { theme, themes } from './store/themeStore';

	$: {
		for (const [key, value] of Object.entries(themes[$theme])) {
			document.documentElement.style.setProperty(`--${key}`, value);
		}
	}
</script>

<Header />
<AuthDrawer />

<main>
	<h1>The theme is {$theme}</h1>
	<Button color="blue">Hello there</Button>
	<Button variant="outline">Hello there</Button>
</main>

<Footer />
