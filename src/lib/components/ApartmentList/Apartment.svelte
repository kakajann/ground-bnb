<script lang="ts">
  import { wishlist } from '$lib/stores'

  export let apartment: App.Apartment.Item;

  const handleWishlist = () => {
    wishlist.toggle(apartment.id)
  }

</script>

<div class="apartment">
  <button class={`wishlist ${$wishlist.includes(apartment.id) ? 'added' : ''}`} on:click={handleWishlist}>
    <img src="/icons/heart.svg" alt="Heart">
  </button>
  <img src={`/apartments/${apartment.id}.jpg`} alt="Apartment">
  <div class="title">
    <a href="/apartment/1">
      {apartment.title}
    </a>
    <span>
      <img src="/icons/star.svg" alt="Star">
      {apartment.rating}
    </span>
  </div>
  <span class="location">
    <img src="/icons/location.svg" alt="Location">
    {apartment.location}
  </span>
  <div class="details">
    <span>{apartment.details.bedrooms} beds</span>
    <span>▪</span>
    <span>{apartment.details.size} &#13217;</span>
    <div class="price">
      <span>from</span>
      <span>${apartment.price}</span>
    </div>
  </div>
</div>