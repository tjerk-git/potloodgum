<script>
  import Canvas from "$lib/components/Canvas.svelte";
  let message;
</script>

<h2>Stuur mij maar* een tekening...</h2>
<aside>
  *je mag ook "gewoon" een <a href="mailto:tjerk.dijkstra@icloud.com">bericht</a
  > sturen
</aside>

<form method="POST" action="/contact">
  <label for="email">Je emailadres:</label>
  <input type="text" name="email" id="email" required />

  <label for="message">Je bericht</label><textarea
    class="textarea"
    placeholder="..."
    rows="10"
    id="message"
    name="message"
  />

  <input type="hidden" name="image" />

  <button> Formulier versturen </button>
</form>

<h3>Je kunstwerk:</h3>
<Canvas />

<style>
  aside {
    font-size: 2.5vw;
    font-style: italic;
    color: #eaeaea;
    margin-bottom: var(--baseline);
  }

  label {
    margin-bottom: var(--baseline);
  }

  h2 {
    color: white;
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
