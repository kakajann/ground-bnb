<script lang="ts">
  export let apartment: App.Apartment.Item;
  export let index: number;
</script>

<div class="apartment">
  <img src={`/apartments/${index + 1}.jpg`} alt="Apartment">
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
    <span>{apartment.details.bedrooms} &#13217;</span>
    <div class="price">
      <span>from</span>
      <span>${apartment.price}</span>
    </div>
  </div>
</div>