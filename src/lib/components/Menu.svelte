<script>
  import Cross from "$lib/components/Cross.svelte";
  import { onMount } from "svelte";

  onMount(() => {
    const handleKeyDown = (/** @type {{ key: string; }} */ event) => {
      if (event.key === "Escape") {
        isMenuShown = !isMenuShown;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  let isMenuShown = false;

  const toggleMenu = () => {
    isMenuShown = !isMenuShown;
  };
</script>

<button aria-label="menu" class="hoverable" on:click={toggleMenu}>Menu</button>

<div class="menu-container {isMenuShown ? 'show' : 'hide'}">
  <nav>
    <ul>
      <li>
        <a href="/" class="hover-underline-animation" on:click={toggleMenu}
          >Potloodgum</a
        >
      </li>
      <li>
        <a
          href="/contact"
          class="hover-underline-animation"
          on:click={toggleMenu}>Contact</a
        >
      </li>
    </ul>
  </nav>

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="cross" on:click={toggleMenu}>
    <Cross color="#f5f3ef" />
  </div>
</div>

<style>
  .menu-container {
    position: absolute;
    background-color: black;
    width: 100vw;
    height: 100vh;
    z-index: 10;
    pointer-events: none;
    top: -120dvh;
  }

  .cross {
    position: absolute;
    top: 50px;
    right: 50px;
    z-index: 20;
  }

  .show {
    top: 0;
    transition: ease-in-out 0.5s;
    pointer-events: auto;
  }

  .hide {
    top: -100dvh;
    transition: ease-in-out 0.5s;
    pointer-events: none;
  }

  nav {
    z-index: 2;
    height: 100%;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    color: #f5f3ef;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem;
    display: flex;
    position: relative;
  }

  nav ul li {
    list-style-type: none;
  }

  nav ul li a {
    display: flex;
    font-size: 8vw;
    color: white;
    text-decoration: none;
  }

  .hover-underline-animation {
    position: relative;
    color: #ffffff;
    text-decoration: none;
  }

  .hover-underline-animation::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #ffffff;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  .hover-underline-animation:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
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
    position: fixed;
    top: 2vw;
    right: 2vw;
    z-index: 10;
  }

  button:hover {
    background-color: #f5f3ef;
    color: #1e1e21;
  }
</style>
