<script lang="ts">
  import data from '$lib/apartments.json'
  import { apartments } from '$lib/stores'

  const handleGenerate = () => {
    const random = data[~~(data.length * Math.random())] as unknown as App.Apartment.Item
    const randomWithId = {...random, ...{id: crypto.randomUUID()}}
    
    apartments.update((prev) => ([randomWithId, ...prev]))
  }
</script>

<button type="button" class="button" on:click={handleGenerate}>
  <img src="/icons/magic.svg" alt="Magic">
  Generate random apartment
</button>