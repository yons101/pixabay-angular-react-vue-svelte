<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";


export default {
  name: "App",
  components: {
    Navbar,
    Home,
    About,
  },
};
</script>

