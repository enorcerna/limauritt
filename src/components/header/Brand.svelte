<script lang="ts">
	import { selectColor, selectSpaceLetter, selecterFont } from '@/store/global';
	import { brand } from '@/utils/config';
	let span: HTMLSpanElement;
	$: selecterFont.subscribe((v) => {
		if (v.name.length > 0) {
			span.style.fontFamily = v.name;
		}
	});
	$: selectColor.subscribe((c) => {
		if (c.blue !== '') {
			span.style.color = c.blue;
		}
	});
	$: selectSpaceLetter.subscribe((v) => {
		if (v > 0) {
			span.style.letterSpacing = `${v}px`;
		}
	});
</script>

<span class="font-bold uppercase" bind:this={span}>{brand}</span>

<style lang="Postcss">
	span {
		font-size: 7rem;
	}
</style>
