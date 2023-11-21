<script lang="ts">
	import { appIsLoading } from "../store/LoadingState";
	import Spinner from "../components/Spinner.svelte";

	export let src = "";
	export let alt = "";
	let loading = false;
	let element: HTMLImageElement;

	const notifyLoaded = () => {
		element.removeEventListener("load", onload);
		loading = false;
	};

	const onload = () => {
		if (!element) return;
		loading = true;
		element.addEventListener("load", () => {
			notifyLoaded();
		});
	};

	$: if (src && element) {
		onload();
	}
</script>

<div class="relative w-full h-full">
	{#if !appIsLoading || loading}
		<Spinner />
	{/if}
	<img bind:this={element} {src} {alt} class="h-full w-full" />
</div>
