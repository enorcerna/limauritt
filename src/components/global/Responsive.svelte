<script lang="ts">
	export let className = '';
</script>

<div class={`w-4/5 mx-auto z-20 ${className}`}>
	<slot />
</div>
