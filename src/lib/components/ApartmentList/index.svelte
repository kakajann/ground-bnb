<script lang="ts">
  import Apartment from "./Apartment.svelte";

  export let apartments: App.Apartment.Item[] = []
</script>

<div id="apartments-list">
  {#each apartments as apartment, index}
    <Apartment {apartment} {index} />
  {/each}
</div>