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
  width="800"
  height="600"
  style="width: 800px; height: 600px; border:1px solid #c3c3c3;"
  on:mousedown={handleMouseDown}
  on:mouseup={handleMouseUp}
  on:mousemove={handleMouseMove}
/>
