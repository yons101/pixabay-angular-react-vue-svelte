<template>
  <div class="container">
    <div class="my-5 input-group">
      <input
        class="form-control"
        type="text"
        placeholder="Search for images"
        v-model="searchTerm"
        @keyup.enter="search"
      />
      <div class="input-group-append">
        <button class="btn px-5" type="button" @click="search">Go!</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Search",
  data() {
    return {
      searchTerm: "",
    };
  },
  methods: {
    search() {
      this.$emit("fetchImages", this.searchTerm);
    },
  },
};
</script>


<style scoped>
button {
  background-color: #41b883;
  color: white;
}

button:hover {
  background-color: #46cf92;
  color: #fff;
}
</style>