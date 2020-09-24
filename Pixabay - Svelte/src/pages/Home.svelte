<script>
    import { onMount } from "svelte";
    import Search from "../components/Search.svelte";
    import ImageCard from "../components/ImageCard.svelte";
    import { state } from "../store.js";

    const PIXABAY_KEY = process.env.PIXABAY_KEY;

    const fetchImages = async (searchTerm = "nature") => {
        await fetch(
            `https://pixabay.com/api/?key=${PIXABAY_KEY}&q=${searchTerm}&image_type=photo&pretty=true`
        )
            .then((res) => res.json())
            .then((data) => {
                $state.images = data.hits;
                $state.loading = false;
            })
            .catch((err) => console.log(err));
    };
    onMount(async () => {
        fetchImages();
    });

    const search = (e) => {
        fetchImages(e.detail);
    };
</script>

<main class="container">
    <Search on:search={search} />

    <div class="row justify-content-center">
        {#if $state.loading}
            <div class="spinner-border text-dark" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        {:else if $state.images.length === 0}
            <p>No images</p>
        {:else}
            {#each $state.images as image}
                <ImageCard {image} />
            {/each}
        {/if}
    </div>
</main>
