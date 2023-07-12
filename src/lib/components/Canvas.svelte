<script>
  let start = { x: 0, y: 0 };
  let end = { x: 0, y: 0 };
  let flag = false;
  let penColor = "#000";

  function handleMouseDown(event) {
    flag = true;
    start.x = event.clientX;
    start.y = event.clientY;
  }

  function handleMouseUp(event) {
    flag = false;
  }

  function handleMouseMove(event) {
    if (flag) {
      end.x = event.clientX;
      end.y = event.clientY;

      var canvas = document.getElementById("myCanvas");
      var ctx = canvas.getContext("2d");
      var rect = canvas.getBoundingClientRect();
      var offsetX = rect.left;
      var offsetY = rect.top;

      ctx.beginPath();
      ctx.fillStyle = "#059862";
      ctx.moveTo(start.x - offsetX, start.y - offsetY);
      ctx.lineTo(end.x - offsetX, end.y - offsetY);

      ctx.stroke();
      start.x = end.x;
      start.y = end.y;
    }
  }
</script>

<canvas
  id="myCanvas"
  on:mousedown={handleMouseDown}
  on:mouseup={handleMouseUp}
  on:mousemove={handleMouseMove}
/>

<style>
  canvas {
    width: 100%;
    height: 100%;
    border: 2px solid #c3c3c3;
    margin-top: var(--baseline);
    margin-bottom: var(--baseline);
  }
</style>
