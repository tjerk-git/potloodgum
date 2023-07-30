<script>
  import Canvas from "$lib/components/Canvas.svelte";
</script>

<section>
  <Canvas />

  <aside>
    *je mag ook "gewoon" een <a href="mailto:tjerk.dijkstra@icloud.com"
      >bericht</a
    > sturen
  </aside>
</section>

<style>
  section {
    background: white;
    padding: 6.6vw 20px 12vw;
  }
  aside {
    font-size: 2.5vw;
    font-style: italic;
    color: #4b4848;
    margin-bottom: var(--baseline);
    margin-top: var(--baseline);
  }
</style>
