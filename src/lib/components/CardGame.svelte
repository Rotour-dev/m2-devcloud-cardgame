<script lang="ts">
  import { compareCards, type CompareResult } from "../GameLogic";
  import Button from "../common/Button.svelte";
  import Card from "../common/Card.svelte";
  import { appIsLoading } from "../store/LoadingState";
	import { computerScored, playerScored, score } from "../store/ScoreState";
  import type { CardDetails } from "../types/CardDetails";
  import WinnerDisplay from "./WinnerDisplay.svelte";

  export let deckId: string;

  const baseUrl = `https://deckofcardsapi.com/api/deck/${deckId}`;

  let playerCard: CardDetails;
  let computerCard: CardDetails;
  let winner: CompareResult;

  const drawCard = async () => {
    appIsLoading.set(true);
    const result = await fetch(`${baseUrl}/draw?count=2`).then((res) => res.json());
    [playerCard, computerCard] = result.cards;
    winner = compareCards(playerCard, computerCard);
    console.debug({
      playerCard,
      computerCard,
      playerValue: playerCard.value,
      computerValue: computerCard.value,
      winner,
    });
    if (winner === "player1") playerScored();
    if (winner === "player2") computerScored();
    appIsLoading.set(false);
  };
</script>

<main class="flex flex-col items-center gap-8 m-auto">
  <div class="flex items-center gap-8">
    <div>
      <Card details={playerCard} />
      <p>Score: {$score.player}</p>
    </div>
    <Button on:click={drawCard} classes="h-[min-content]">Draw card</Button>
    <div>
      <Card details={computerCard} />
      <p>Score: {$score.computer}</p>
    </div>
  </div>
  {#if winner}
    {#key winner}
      <WinnerDisplay value={winner} />
    {/key}
  {/if}
</main>

<footer>
  <h1 class="text-black text-xl">New deck : {deckId}</h1>
</footer>
