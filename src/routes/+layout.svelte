<script lang="ts">
    import "../lib/style/global.css";
    import "sweetalert2/dist/sweetalert2.min.css";
    import Menu from "$lib/components/Menu.svelte";
</script>

<div class="app">
    <Menu />

    <main class="container">
        <slot />
    </main>
</div>
