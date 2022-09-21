<script>
  import ApartmentList from '$lib/components/ApartmentList/index.svelte';
  import data from '$lib/apartments.json'
  import { wishlist } from '$lib/stores'

  $: apartments = data.filter((item) => $wishlist.includes(item.id))
</script>

<div id="wishlist">
  <h2>My Wishlist</h2>

  {#if apartments.length}
    <ApartmentList {apartments} />
  {:else}
    <p>You have no apartment in your wishlist</p>
  {/if}
</div>