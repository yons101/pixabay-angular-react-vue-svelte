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
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    Search,
    ImageCard,
  },

  methods: {
    ...mapActions(["fetchImages"]),
  },
  computed: mapGetters(["images", "loading"]),

  created() {
    this.fetchImages("business");
  },
};
</script>

<style></style>
