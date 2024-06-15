<script lang="ts">
	import { selectSpaceLetter } from '@/store/global';
	import { Slider } from '../ui/slider';
	const handleChange = (v: number[]) => {
		selectSpaceLetter.set(v[0]);
	};
</script>

<section class="w-full flex gap-1 flex-col">
	<span class="font-thin opacity-80 text-sm">Espacio letra</span>
	<Slider value={[0]} max={10} step={1} class="w-full" onValueChange={handleChange} />
</section>
