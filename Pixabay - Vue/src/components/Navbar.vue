<template>
  <nav class="navbar navbar-expand-lg shadow-sm">
    <div class="container">
      <router-link to="/" class="navbar-brand logo text-white"
        >Pixabay - Vue</router-link
      >
      <router-link to="/about/" class="navbar-brand logo text-white"
        >About</router-link
      >
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
nav {
  background-color: #41b883 !important;
}
</style>