<script lang="ts">
	import { combinedPalette } from '@/utils/palettes';
	import Button from '../ui/button/button.svelte';
	import { selectColor } from '@/store/global';
	let blue = '';
	let green = '';
	const handleSelect = (b = '', g = '') => {
		blue = b;
		green = g;
		selectColor.set({ blue, green });
	};
</script>

<section class="grid grid-cols-2 gap-2 w-full">
	<div class="flex gap-2 flex-col">
		{#each combinedPalette.blue as hex}
			<Button
				style={`background-color:${hex};`}
				class=" text-white rounded-lg px-1 h-7 w-full"
				on:click={() => handleSelect(hex, green)}
			></Button>
		{/each}
	</div>
	<div class="flex gap-2 flex-col">
		{#each combinedPalette.green as hex}
			<Button
				style={`background-color:${hex};`}
				class=" text-white rounded-lg px-1 h-7 w-full"
				on:click={() => handleSelect(blue, hex)}
			></Button>
		{/each}
	</div>
</section>
