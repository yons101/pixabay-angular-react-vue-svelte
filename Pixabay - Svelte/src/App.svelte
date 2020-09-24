<script>
    import Navbar from "./components/Navbar.svelte";
    import Home from "./pages/Home.svelte";
    import About from "./pages/About.svelte";
    import { Router, Route } from "svelte-routing";
    export let url = "";
</script>

<Router {url}>
    <Navbar />
    <div class="container">
        <Route path="/" component={Home} />
        <Route path="/about/" component={About} />
    </div>
</Router>
