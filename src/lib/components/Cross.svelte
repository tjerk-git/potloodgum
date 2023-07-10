<script>
  export let color;
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  preserveAspectRatio="none"
  x="0px"
  y="0px"
  width="440px"
  height="440px"
  viewBox="0 0 440 440"
>
  <defs>
    <path
      id="Layer1_0_1_STROKES"
      stroke={color}
      stroke-width="80"
      stroke-linejoin="round"
      stroke-linecap="round"
      fill="none"
      d="
M 58.55 58.55
L 381.5 381.5"
    />

    <path
      id="Layer0_0_1_STROKES"
      stroke={color}
      stroke-width="80"
      stroke-linejoin="round"
      stroke-linecap="round"
      fill="none"
      d="
M 58.55 381.5
L 381.5 58.55"
    />
  </defs>

  <g transform="matrix( 1, 0, 0, 1, 0,0) ">
    <use xlink:href="#Layer1_0_1_STROKES" />
  </g>

  <g transform="matrix( 1, 0, 0, 1, 0,0) ">
    <use xlink:href="#Layer0_0_1_STROKES" />
  </g>
</svg>

<style>
  svg {
    width: 8vw;
    height: auto;
    cursor: pointer;
  }
</style>
