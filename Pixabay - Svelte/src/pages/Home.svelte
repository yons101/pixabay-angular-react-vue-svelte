<script>
    import { onMount } from "svelte";
    import Search from "../components/Search.svelte";
    import ImageCard from "../components/ImageCard.svelte";

    let images = [];
    let loading = true;
    const PIXABAY_KEY = process.env.PIXABAY_KEY;

    const fetchImages = async (searchTerm = "nature") => {
        await fetch(
            `https://pixabay.com/api/?key=${PIXABAY_KEY}&q=${searchTerm}&image_type=photo&pretty=true`
        )
            .then((res) => res.json())
            .then((data) => {
                images = data.hits;
                loading = false;
            })
            .catch((err) => console.log(err));
    };
    onMount(async () => fetchImages());

    const search = (e) => {
        fetchImages(e.detail);
    };
</script>

<main class="container">
    <Search on:search={search} />

    <div class="row justify-content-center">
        {#if loading}
            <div class="spinner-border text-dark" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        {:else if images.length === 0}
            <p>No images</p>
        {:else}
            {#each images as image}
                <ImageCard {image} />
            {/each}
        {/if}
    </div>
</main>
