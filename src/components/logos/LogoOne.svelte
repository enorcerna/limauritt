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
		xmlns:xlink="http://www.w3.org/1999/xlink"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 171.80157 260.70746"
		version="1.1"
		id="svg1"
		xml:space="preserve"
		class="h-28"
		><defs id="defs1" /><g
			id="layer2"
			style="display:inline"
			transform="translate(-818.14337,-340.48605)"
			><g id="g1" transform="translate(-303.93706,-2.257099)"
				><path
					fill={green}
					style="fill-opacity:1;stroke:none;stroke-opacity:1"
					d="m 1122.394,342.74315 c 0,0 -0.4207,29.6942 0.798,91.77057 1.2187,62.07637 84.1895,84.58852 84.1895,84.58852 0,0 0.071,-29.27991 -1.197,-83.39152 -1.268,-54.11161 -83.7905,-92.96757 -83.7905,-92.96757 z"
					id="path1"
				/><path
					fill={blue}
					style="display:inline;fill-opacity:1;stroke:none;stroke-opacity:1"
					d="m 1122.0804,520.91824 c 0,0 45.3004,-2.91999 93.9317,-0.37479 48.6313,2.5452 77.8699,82.10197 77.8699,82.10197 0,0 -39.949,1.98725 -93.6696,-0.28214 -53.7206,-2.26939 -78.132,-81.44504 -78.132,-81.44504 z"
					id="path2"
				/></g
			></g
		></svg
	>
	<Brand />
</div>
