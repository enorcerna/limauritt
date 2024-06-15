<script lang="ts">
	import Check from 'lucide-svelte/icons/check';
	import ChevronsUpDown from 'lucide-svelte/icons/chevrons-up-down';
	import { tick } from 'svelte';
	import * as Command from '@/components/ui/command';
	import * as Popover from '@/components/ui/popover';
	import { Button } from '@/components/ui/button';
	import { cn } from '@/utils.js';
	import fonts from '@/data/fonts.json';
	import { selecterFont } from '@/store/global';
	import Font from '../global/Font.svelte';

	let open = false;
	let value = '';
	let name = '';

	$: selectedValue = fonts.find((f) => f.name === value)?.name ?? 'Seleccionar...';
	$: selecterFont.set({
		value,
		name
	});
	function closeAndFocusTrigger(triggerId: string) {
		open = false;
		tick().then(() => {
			document.getElementById(triggerId)?.focus();
		});
	}
</script>

<Font name={value} />
<div class="flex flex-col gap-1 w-full">
	<span class="font-thin opacity-80 text-sm">Tipo de letra</span>
	<Popover.Root bind:open let:ids>
		<Popover.Trigger asChild let:builder>
			<Button
				builders={[builder]}
				variant="outline"
				role="combobox"
				aria-expanded={open}
				class="w-[200px] justify-between"
			>
				{selectedValue}
				<ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
			</Button>
		</Popover.Trigger>
		<Popover.Content class="w-[200px] p-0">
			<Command.Root>
				<Command.Input placeholder="Buscar Fuente..." />
				<Command.Empty>No framework found.</Command.Empty>
				<Command.Group>
					{#each fonts as fnt}
						<Command.Item
							value={fnt.name}
							onSelect={(currentValue) => {
								name = currentValue;
								value = currentValue;
								closeAndFocusTrigger(ids.trigger);
							}}
						>
							<Check class={cn('mr-2 h-4 w-4', value !== fnt.name && 'text-transparent')} />
							{fnt.name}
						</Command.Item>
					{/each}
				</Command.Group>
			</Command.Root>
		</Popover.Content>
	</Popover.Root>
</div>
