<script context="module">
  import mapTouchToMouseFor from "svelte-touch-to-mouse";
</script>

<script>
  import { onMount } from "svelte";
  import Swal from "sweetalert2";

  let start = { x: 0, y: 0 };
  let end = { x: 0, y: 0 };
  let flag = false;
  let penColor = "#000";
  let canvas;
  let email;

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

    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    ctx.fillStyle = "rgba(0,0,0,0)";
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
  }

  function clearArea() {
    confirm("Een gummetje zou wel handig zijn hé?");
    const ctx = canvas.getContext("2d");
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  }

  function send() {
    const imageDataUrl = canvas.toDataURL();

    const formData = new FormData();
    formData.append("image", imageDataUrl);
    formData.append("email", email);

    fetch("/contact", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        Swal.fire({
          title: "Dankjewel wat lief!",
          text: "Uw meesterwerk is verzonden!",
          icon: "success",
        });
      })
      .catch((error) => {
        console.error("Error during fetch:", error);
      });
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

<label for="email">Je e-mailadres:</label>
<input type="text" bind:value={email} required />

<div class="buttons">
  <button class="button" on:click={clearArea}>Opnieuw</button>
  <button class="button" on:click={send}>Aanschouw mijn meesterwerk</button>
</div>

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

  .buttons {
    margin-bottom: var(--baseline);
    margin-top: var(--baseline);
    display: flex;
    width: 100%;
  }

  label {
    width: 100%;
    font-weight: bold;
  }

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #c3c3c3;
    margin-bottom: var(--baseline);
    margin-top: var(--baseline);
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
