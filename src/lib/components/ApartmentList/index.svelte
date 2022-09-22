<script lang="ts">
  import { flip } from "svelte/animate";
  import { fade, fly, scale } from "svelte/transition";
  import Apartment from "./Apartment.svelte";

  export let apartments: App.Apartment.Item[] = []
</script>

<div id="apartments-list">
  {#each apartments as apartment (apartment.id) }
    <div animate:flip={{duration: 360}} out:scale|local={{start: 0.6}}>
      <Apartment {apartment} />
    </div>
  {/each}
</div>