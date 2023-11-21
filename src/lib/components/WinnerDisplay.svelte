<script lang="ts">
  import type { CompareResult } from "../GameLogic";

  export let value: CompareResult;

  const text = value === "player1" ? "You win!" : value === "player2" ? "You lose!" : "Draw!";
</script>

<p class="font-bold text-8xl">{text}</p>
