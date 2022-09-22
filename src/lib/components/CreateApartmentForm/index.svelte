<script lang="ts">
  import ApartmentGenerator from "../ApartmentGenerator.svelte";
</script>

<form>
  <div class="group">
    <label for="">Title</label>
    <input type="text" placeholder="Manhattan Bowery">
  </div>
  <div class="groups">
    <div class="group">
      <label for="">City</label>
      <input type="text" placeholder="New York">
    </div>
    <div class="group">
      <label for="">Country</label>
      <input type="text" placeholder="USA">
    </div>
  </div>
  <div class="groups">
    <div class="group">
      <label for="">Bedrooms</label>
      <input type="text" placeholder="2">
    </div>
    <div class="group">
      <label for="">Size (in square metre)</label>
      <input type="text" placeholder="54">
    </div>
  </div>
  <div class="group">
    <label for="">Starting price</label>
    <input type="text" placeholder="75">
  </div>
  <ApartmentGenerator />
</form>