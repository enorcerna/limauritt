<script lang="ts">
	import Font from '@/components/global/Font.svelte';
	import Responsive from '@/components/global/Responsive.svelte';
	import Header from '@/components/header/Header.svelte';
	import '@/styles/app.css';
	import { ModeWatcher } from 'mode-watcher';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
	<title>App logo | Limauritt</title>
</svelte:head>
<div
	class="bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] w-screen max-h-screen fixed -z-10 top-0 bottom-0"
></div>
<ModeWatcher />
<Header />
<Responsive>
	<main class="max-h-screen mx-auto py-4">
		<slot />
	</main>
</Responsive>
