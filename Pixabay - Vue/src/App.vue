<template>
  <div id="app">
    <Navbar />
    <Search />

    <div class="row justify-content-center container mx-auto p-0">
      <div v-if="loading" class="spinner-border text-dark" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <p v-else-if="images.length === 0" class="h1">No images</p>

      <ImageCard v-else v-for="image in images" :key="image.id" :image="image" />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Search from "./components/Search.vue";
import ImageCard from "./components/ImageCard.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  components: {
    Navbar,
    Search,
    ImageCard
  },
  methods: {
    ...mapActions(["fetchImages"])
  },
  computed: mapGetters(["images", "loading"]),
  created() {
    this.fetchImages("business");
  }
};
</script>

<style>

</style>
