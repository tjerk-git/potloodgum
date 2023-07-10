<script lang="ts">
    import "../lib/style/global.css";
    import Menu from "$lib/components/Menu.svelte";
</script>

<div class="app">
    <Menu />
    <main class="container">
        <slot />
    </main>
</div>
