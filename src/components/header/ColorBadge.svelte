<script lang="ts">
	import { selectColor } from '@/store/global';
	import Badge from '../ui/badge/badge.svelte';
	import { colors } from '@/utils/config';

	let blue = colors.blue;
	let green = colors.green;
	$: selectColor.subscribe((c) => {
		blue = c.blue;
		green = c.green;
	});
</script>

<div class="flex gap-1">
	<Badge class="flex gap-1 items-center">
		<span class="rounded-lg h-3 w-3" style={`background-color:${green}`} />{green}
	</Badge>
	<Badge class="flex gap-1 items-center">
		<span class="rounded-lg h-3 w-3" style={`background-color:${blue}`} />{blue}
	</Badge>
</div>
