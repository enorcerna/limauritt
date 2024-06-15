<script lang="ts">
	import fonts from '@/data/fonts.json';
	export let name = fonts[0].value;
</script>

<svelte:head>
	<link rel="stylesheet" href={`https://fonts.googleapis.com/css2?family=${name}`} />
</svelte:head>
