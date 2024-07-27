<script lang="ts">
	import { selectColor } from '@/store/global';
	import * as Tabs from '@/components/ui/tabs';
	import iro from '@jaames/iro';
	import type { IroColorPicker } from '@jaames/iro/dist/ColorPicker';
	import { onMount } from 'svelte';
	import PaletteCombine from '@/components/page/PaletteCombine.svelte';
	import { colors } from '@/utils/config';
	let colorPickerOne: IroColorPicker;
	let colorPickerTwo: IroColorPicker;
	let blue = colors.blue;
	let green = colors.green;
	onMount(() => {
		colorPickerOne = new iro.ColorPicker('#pickerOne', { width: 200, color: '#f00' });
		colorPickerOne.on('color:change', (c: { hexString: string }) => {
			green = c.hexString;
		});
		colorPickerTwo = new iro.ColorPicker('#pickerTwo', { width: 200, color: '#f00' });
		colorPickerTwo.on('color:change', (c: { hexString: string }) => {
			blue = c.hexString;
		});
	});
	$: selectColor.set({ blue, green });
</script>

<div class="flex flex-col gap-1">
	<span class="font-thin opacity-80 text-sm">Color de logo</span>
	<Tabs.Root value="colorOne" class="">
		<Tabs.List>
			<Tabs.Trigger value="colorOne">Color 1</Tabs.Trigger>
			<Tabs.Trigger value="ColorTwo">color 2</Tabs.Trigger>
			<Tabs.Trigger value="Combine">Combinacion</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content value="colorOne" class="mx-auto">
			<div id="pickerOne"></div>
		</Tabs.Content>
		<Tabs.Content value="ColorTwo" class="mx-auto">
			<div id="pickerTwo"></div>
		</Tabs.Content>
		<Tabs.Content value="Combine" class="mx-auto">
			<PaletteCombine />
		</Tabs.Content>
	</Tabs.Root>
</div>
