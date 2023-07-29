<script>
  import Canvas from "$lib/components/Canvas.svelte";
</script>

<section>
  <h2>Stuur mij maar* een tekening...</h2>

  <h3>Je kunstwerk:</h3>
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

  label {
    margin-bottom: var(--baseline);
  }

  h2 {
    color: rgb(33, 32, 32);
    margin-top: 5rem;
  }

  h3 {
    margin-top: var(--baseline);
    margin-bottom: var(--baseline);
  }
</style>
