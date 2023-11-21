<script lang="ts">
  import Spinner from "../components/Spinner.svelte";
  import { appIsLoading } from "../store/LoadingState";
  import type { CardDetails } from "../types/CardDetails";
  import Image from "./Image.svelte";

  export let details: CardDetails;
  const defaultImg = "https://deckofcardsapi.com/static/img/back.png";
  let loading = false;

  const updateLoadingState = (e: CustomEvent<boolean>) => {
    loading = e.detail;
  };

  $: console.log(`${details?.image} changed ! loading: ${loading}`);
</script>

<div class="h-[30vh]">
  <Image src={details?.image ?? defaultImg} alt={`card of ${details?.value}${details?.suit}`} on:loading={updateLoadingState} />
</div>
