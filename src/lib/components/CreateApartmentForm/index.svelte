<script lang="ts">
  import ApartmentGenerator from "../ApartmentGenerator.svelte";
  import { form } from './store'
  import { apartments } from '$lib/stores'

  const handleSubmit = () => {
    const apartment: App.Apartment.Item = {
      id: crypto.randomUUID(),
      image: String(~~(Math.random() * (8 - 1) + 1)),
      title: $form.title,
      price: $form.price,
      location: `${$form.city} ${$form.country}`,
      rating: ~~Math.random() * (2 - 5) + 2,
      details: {
        size: $form.size,
        bedrooms: $form.bedrooms
      }
    }
    apartments.update((prev) => ([apartment, ...prev]))
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <div class="group">
    <label for="">Title</label>
    <input type="text" placeholder="Manhattan Bowery" bind:value={$form.title}>
  </div>
  <div class="groups">
    <div class="group">
      <label for="">City</label>
      <input type="text" placeholder="New York" bind:value={$form.city}>
    </div>
    <div class="group">
      <label for="">Country</label>
      <input type="text" placeholder="USA" bind:value={$form.country}>
    </div>
  </div>
  <div class="groups">
    <div class="group">
      <label for="">Bedrooms</label>
      <input type="number" placeholder="2" bind:value={$form.bedrooms}>
    </div>
    <div class="group">
      <label for="">Size (in square metre)</label>
      <input type="number" placeholder="54" bind:value={$form.size}>
    </div>
  </div>
  <div class="group">
    <label for="">Starting price</label>
    <input type="number" placeholder="75" bind:value={$form.price}>
  </div>
  <button class="button">Insert</button>
  <ApartmentGenerator />
</form>