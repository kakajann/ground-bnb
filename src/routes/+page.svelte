<script>
  import { apartments } from '$lib/stores'
  import ApartmentList from '$lib/components/ApartmentList/index.svelte';
  import CreateApartmentForm from '$lib/components/CreateApartmentForm/index.svelte'
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div id="home">
  <ApartmentList apartments={$apartments} />
  <div class="form">
    <CreateApartmentForm />
  </div>
</div>