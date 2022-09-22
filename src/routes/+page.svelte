<script>
  import ApartmentList from '$lib/components/ApartmentList/index.svelte';
  import CreateApartmentForm from '$lib/components/CreateApartmentForm/index.svelte'
  import data from '$lib/apartments.json'
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div id="home">
  <ApartmentList apartments={data} />
  <div class="form">
    <CreateApartmentForm />
  </div>
</div>