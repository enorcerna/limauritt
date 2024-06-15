<script lang="ts">
	import { colors } from '@/utils/config';
	import Brand from '../header/Brand.svelte';
	import { selectColor } from '@/store/global';
	export let blue = colors.blue;
	export let green = colors.green;
	$: selectColor.subscribe((c) => {
		blue = c.blue;
		green = c.green;
	});
</script>

<div class="flex gap-2 items-center">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 101.13432 175.81216"
		version="1.1"
		id="svg1"
		class="h-28"
		xml:space="preserve"
		><defs id="defs1" /><g
			id="layer4"
			style="display:inline"
			transform="translate(-664.68744,-95.77364)"
			><g id="g9" transform="matrix(1,0,0,0.70880759,5.6427474,52.686216)"
				><path
					fill={green}
					d="m 759.99119,60.788613 c 0,0 0.5174,36.396943 -0.16527,62.099167 -0.68267,25.70222 -46.40946,49.0372 -46.40946,49.0372 0,0 -1.0821,-24.60841 -0.79801,-50.67331 0.28409,-26.0649 47.37274,-60.463057 47.37274,-60.463057 z"
					id="path5"
				/><path
					fill={blue}
					style="display:inline;"
					d="m 712.75821,194.84812 c -0.43192,-25.65976 46.40116,-48.9086 46.40116,-48.9086 0,0 0.73274,113.88036 0.68114,133.09813 -0.0516,19.21777 -47.08229,28.72818 -47.08229,28.72818 0,0 0.43191,-87.25795 -1e-5,-112.91771 z"
					id="path4"
				/><path
					fill={blue}
					style="display:inline;"
					d="m 659.15212,61.047382 c 0,0 -0.41934,183.275548 0.39901,213.466338 0.81835,30.19079 47.08229,34.31421 47.08229,34.31421 0,0 0.55827,-175.8255 0.399,-207.8803 -0.15927,-32.0548 -47.8803,-39.900248 -47.8803,-39.900248 z"
					id="path3"
				/></g
			></g
		></svg
	>
	<Brand />
</div>
