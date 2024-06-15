<script lang="ts">
	import LogoThree from '@/components/logos/LogoThree.svelte';
	import LogoTwo from '@/components/logos/LogoTwo.svelte';
	import LogoOne from '@/components/logos/LogoOne.svelte';
	import SelectFont from '@/components/filter/SelectFont.svelte';
	import * as Card from '@/components/ui/card';
	import { selecterFont } from '@/store/global';
	import { Badge } from '@/components/ui/badge';
	import Icon from '@iconify/svelte';
	import SelectColor from '@/components/filter/SelectColor.svelte';
	import ColorBadge from '@/components/header/ColorBadge.svelte';
	import SpaceLetter from '@/components/filter/SpaceLetter.svelte';
	import SpaceLetterBadge from '@/components/header/badge/SpaceLetterBadge.svelte';
	let font = '';
	selecterFont.subscribe((v) => {
		font = v.name;
	});
</script>

<div class="mb-3">
	<Card.Root>
		<Card.Content class="p-2 flex gap-2 items-center">
			<Badge class="inline-flex gap-1"><Icon icon="solar:text-bold-duotone" /> {font}</Badge>
			<ColorBadge />
			<SpaceLetterBadge />
		</Card.Content>
	</Card.Root>
</div>
<div class="flex gap-2 h-full">
	<aside class="w-1/3">
		<Card.Root>
			<Card.Header>
				<Card.Title>Filtros</Card.Title>
			</Card.Header>
			<Card.Content class="flex gap-3 flex-col items-center">
				<SelectFont />
				<SpaceLetter />
				<SelectColor />
			</Card.Content>
		</Card.Root>
	</aside>
	<section class="w-full">
		<Card.Root>
			<Card.Header>
				<Card.Title>Logotipos</Card.Title>
			</Card.Header>
			<Card.Content>
				<LogoOne />
				<LogoTwo />
				<LogoThree />
			</Card.Content>
		</Card.Root>
	</section>
</div>
