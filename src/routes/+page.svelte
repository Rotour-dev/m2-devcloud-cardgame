<script lang="ts">
  import CardGame from "$lib/components/CardGame.svelte";
  import Spinner from "$lib/components/Spinner.svelte";
  import { appIsLoading } from "$lib/store/LoadingState";
	import { onMount } from "svelte";

	const getDeckId = async () => {
    const res = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
		const json = await res.json()
		deckId = json.deck_id
	}
  
  let deckId: string;
  let fetchDeckIdPromise: Promise<void>;

  onMount(() => {
    fetchDeckIdPromise = getDeckId();
  });
</script>

{#if $appIsLoading}
	<Spinner/>
{/if}

{#await fetchDeckIdPromise}
	<Spinner/>
{:then}
<div class="p-8">
  <CardGame {deckId}/>
</div>
{:catch}
	<p>Error: Couldnt fetch api</p>
{/await}
