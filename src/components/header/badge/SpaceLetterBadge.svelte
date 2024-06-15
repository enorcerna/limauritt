<script lang="ts">
	import { Badge } from '@/components/ui/badge';
	import { selectSpaceLetter } from '@/store/global';
	import Icon from '@iconify/svelte';
	let value: number;
	$: selectSpaceLetter.subscribe((v) => (value = v));
</script>

<Badge class="flex gap-1">
	<Icon icon="tabler:letter-spacing" />
	{value}px
</Badge>
