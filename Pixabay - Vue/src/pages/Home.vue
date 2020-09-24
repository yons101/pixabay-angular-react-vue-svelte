<template>
  <div id="app">
    <Search v-on:fetchImages="fetchImages" />
    <div class="row justify-content-center container mx-auto p-0">
      <div v-if="this.loading" class="spinner-border text-dark" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <p v-else-if="this.images.length === 0" class="h1">No images</p>

      <ImageCard
        v-else
        v-for="image in images"
        :key="image.id"
        :image="image"
      />
    </div>
  </div>
</template>

<script>
import Search from "../components/Search.vue";
import ImageCard from "../components/ImageCard.vue";

export default {
  name: "Home",
  components: {
    Search,
    ImageCard,
  },
  data() {
    return {
      images: [],
      loading: true,
    };
  },
  methods: {
    async fetchImages(searchTerm = "nature") {
      await fetch(
        `https://pixabay.com/api/?key=17039239-7ccdc3f5c80caa80d628661b2&q=${searchTerm}&image_type=photo&pretty=true`
      )
        .then((res) => res.json())
        .then((data) => {
          this.images = data.hits;
          this.loading = false;
        })
        .catch((err) => console.log(err));
    },
  },
  created() {
    this.fetchImages("business");
  },
};
</script>

<style></style>
