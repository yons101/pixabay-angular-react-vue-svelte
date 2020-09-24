<script>
    import { Link } from "svelte-routing";
</script>

<style>
    nav {
        background-color: #ff3e00 !important;
    }
</style>

<nav class="navbar navbar-expand-lg bg-primary shadow-sm">
    <div class="container">
        <Link to="/">
            <span class="navbar-brand logo text-white">Pixabay - Svelte</span>
        </Link>
        <Link to="/about/">
            <span class="navbar-brand logo text-white"> About </span>
        </Link>
    </div>
</nav>
