<script lang="ts">
	import Responsive from '../global/Responsive.svelte';
	import Dark from './Dark.svelte';
	import Logo from './Logo.svelte';
	import Software from './Software.svelte';
</script>

<header class="h-14 py-2 my-auto flex items-center z-10">
	<Responsive className="flex items-center justify-between">
		<Logo />
		<div class="flex gap-4 items-center">
			<Software />
			<Dark />
		</div>
	</Responsive>
</header>
