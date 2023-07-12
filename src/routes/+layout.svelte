<script lang="ts">
    import "../lib/style/global.css";
    import Menu from "$lib/components/Menu.svelte";
    import { Cursor } from "curseur";
</script>

<div class="app">
    <Cursor color="#ff007f" mixBlendMode="normal" size={30} />
    <Menu />

    <main class="container">
        <slot />
    </main>
</div>
