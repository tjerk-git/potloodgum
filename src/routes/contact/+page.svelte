<script>
  import Canvas from "$lib/components/Canvas.svelte";
</script>

<h2>Stuur mij maar* een tekening...</h2>
<aside>
  *je mag ook "gewoon" een elektronisch <a
    href="mailto:tjerk.dijkstra@icloud.com">bericht</a
  > sturen
</aside>

<Canvas />

<style>
  aside {
    font-size: 1vw;
    font-style: italic;
    color: #eaeaea;
  }

  h2 {
    color: white;
  }
</style>
