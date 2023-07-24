<script context="module">
  import mapTouchToMouseFor from "svelte-touch-to-mouse";
</script>

<script>
  import { onMount } from "svelte";

  let start = { x: 0, y: 0 };
  let end = { x: 0, y: 0 };
  let flag = false;
  let penColor = "#000";
  let canvas;

  function handleMouseDown(event) {
    flag = true;
    start.x = event.clientX;
    start.y = event.clientY;
  }

  function handleMouseUp(event) {
    flag = false;
  }

  function handleEraser(event) {
    //penColor = "#fff";
  }

  function handleMouseMove(event) {
    if (flag) {
      end.x = event.clientX;
      end.y = event.clientY;

      var ctx = canvas.getContext("2d");
      var rect = canvas.getBoundingClientRect();
      var offsetX = rect.left;
      var offsetY = rect.top;

      ctx.beginPath();
      ctx.fillStyle = penColor;
      ctx.moveTo(start.x - offsetX, start.y - offsetY);
      ctx.lineWidth = 10;
      ctx.lineJoin = "round";
      ctx.lineTo(end.x - offsetX, end.y - offsetY);

      ctx.stroke();
      start.x = end.x;
      start.y = end.y;
    }
  }

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function clearArea() {
    confirm("Een gummetje zou wel handig zijn hé?");
    const ctx = canvas.getContext("2d");
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  }

  function send() {
    const imageDataUrl = canvas.toDataURL();

    // Send the imageDataUrl to the server or use it as needed
    //console.log("Image Data URL:", imageDataUrl);
  }

  onMount(() => {
    resizeCanvas();
    mapTouchToMouseFor("canvas");
  });
</script>

<canvas
  bind:this={canvas}
  on:mousedown={handleMouseDown}
  on:mouseup={handleMouseUp}
  on:mousemove={handleMouseMove}
/>

<button class="button" on:click={clearArea}>Opnieuw</button>
<button class="button" on:click={send}>Opslaan</button>

<style>
  canvas {
    -webkit-touch-callout: none;
    -ms-touch-action: none;
    touch-action: none;
    width: 100%;
    height: 50vh;
    background: white;
    margin-top: --var(baseline);
    border: 2px solid #c3c3c3;
    margin-bottom: var(--baseline);
  }

  button {
    color: #f5f3ef;
    text-align: center;
    cursor: pointer;
    background-color: #1e1e21;
    border: 2px solid #1e1e21;
    border-radius: 500px;
    margin: 0;
    padding: 1rem 1.5rem;
    font-family: Inter, sans-serif;
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 110%;
    text-decoration: none;
    transition: border-color 0.3s, color 0.3s, background-color 0.3s;
  }

  button:hover {
    background-color: #f5f3ef;
    color: #1e1e21;
  }
</style>
