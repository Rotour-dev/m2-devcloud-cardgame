<script lang="ts">
  export let classes = ""
</script>

<button class={`px-4 py-2 rounded-md border-2 border-solid border-white ${classes}`} on:click>
  <slot/>
</button>