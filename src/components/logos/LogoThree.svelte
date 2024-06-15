<script lang="ts">
	import { selectColor } from '@/store/global';
	import Brand from '../header/Brand.svelte';
	import { colors } from '@/utils/config';
	export let blue = colors.blue;
	export let green = colors.green;
	$: selectColor.subscribe((c) => {
		blue = c.blue;
		green = c.green;
	});
</script>

<div class="flex gap-2 items-center">
	<svg
		xmlns:xlink="http://www.w3.org/1999/xlink"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 164.78802 233.01746"
		version="1.1"
		id="svg1"
		class="h-28"
		xml:space="preserve"
		><defs id="defs1" /><g
			id="layer5"
			style="display:inline"
			transform="translate(-794.81297,-696.65834)"
			><g id="g2"
				><path
					fill={green}
					d="m 835.11222,696.65835 c 0,0 34.47888,33.1134 40.69825,51.47133 6.21937,18.35793 -0.798,50.67331 -0.798,50.67331 0,0 -31.51613,-32.63969 -37.90524,-50.67331 -6.38911,-18.03362 -1.99501,-51.47133 -1.99501,-51.47133 z"
					id="path8"
				/><path
					fill={blue}
					style="display:inline;"
					d="m 869.42643,900.54863 c 0,0 0.14538,-4.60594 -1.197,-49.07731 -1.34238,-44.47137 -73.41646,-83.79052 -73.41646,-83.79052 0,0 0.007,38.86645 0.798,80.5985 0.79132,41.73205 57.05736,81.39651 57.05736,81.39651 h 92.56858 c 0,0 -19.60133,-19.99343 -32.71821,-25.13716 -13.11688,-5.14373 -43.09227,-3.99002 -43.09227,-3.99002 z"
					id="path7"
				/><path
					fill={blue}
					style="display:inline;"
					d="m 879.00249,889.77556 c 0,0 -1.74615,-41.59193 -1.59601,-83.39152 0.15014,-41.79959 82.19452,-80.5985 82.19452,-80.5985 0,0 -1.49911,48.52274 -2.39402,88.57855 -0.89491,40.05581 -78.20449,75.41147 -78.20449,75.41147 z"
					id="path6"
				/></g
			></g
		></svg
	>
	<Brand />
</div>
