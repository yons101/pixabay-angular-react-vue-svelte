<script>
  import {
    createEventDispatcher
  } from "svelte";
  import {
    onMount
  } from "svelte";


  const dispatch = createEventDispatcher();

  let searchTerm = "";

  const search = () => {
    dispatch("search", searchTerm);
  };
  onMount(async () => {
    document.getElementById("search").addEventListener("keyup", e => {
      if (e.keyCode === 13) {
        search()
      }
    });
  });
</script>

<div class="my-5 input-group">
  <input class="form-control" id="search" type="text" placeholder="Search for images" bind:value={searchTerm} />
  <div class="input-group-append">
    <button class="btn px-5" type="button" on:click={search}>
      Go!
    </button>
  </div>
</div>

<style>
  button {
    background-color: #ff3e00;
    color: white;
  }

  button:hover {
    background-color: #f58560;
    color: #fff;
  }
 
</style>