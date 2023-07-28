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

  .textarea {
    display: block;
    max-width: 100%;
    min-width: 100%;
    padding: calc(0.75em - 1px);
    resize: vertical;
    box-shadow: inset 0 0.0625em 0.125em rgba(10, 10, 10, 0.05);
    max-width: 100%;
    width: 100%;
    background-color: #fff;
    border-color: #dbdbdb;
    border-radius: 0.375em;
    color: #363636;
    font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Helvetica,
      Arial, sans-serif;
  }
  .textarea:not([rows]) {
    max-height: 40em;
    min-height: 8em;
  }
  .textarea[rows] {
    height: initial;
  }
</style>
