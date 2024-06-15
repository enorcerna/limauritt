<script lang="ts">
	import Responsive from '../global/Responsive.svelte';
	import Dark from './Dark.svelte';
</script>

<header class="h-14 py-2 my-auto flex items-center z-10">
	<Responsive className="flex items-center">
		<div class="flex-1"></div>
		<Dark />
	</Responsive>
</header>
