<script>
    import Canvas from "$lib/components/Canvas.svelte";
    import Hamaki from "$lib/components/Hamaki.svelte";
    import Sneup from "$lib/components/Sneup.svelte";
</script>

<div class="mirror-container">
    <div class="vertical-text">
        <h1><span class="faded-text">Potloodgum</span></h1>
        <h1><span class="faded-text">Potloodgum</span></h1>
        <h1><span class="faded-text">Potloodgum</span></h1>
        <h1><span class="faded-text">Potloodgum</span></h1>
    </div>

    <div class="vertical-text mirror">
        <h1><span class="faded-text">Potloodgum</span></h1>
        <h1><span class="faded-text">Potloodgum</span></h1>
        <h1><span class="faded-text">Potloodgum</span></h1>
        <h1><span class="faded-text">Potloodgum</span></h1>
    </div>
</div>

<div class="hoverable">
    <h2>De gumfactor</h2>
    <p class="white-shadow">
        Denker in pixels, schetser van code, Potloodgum* brengt jouw verhaal
        online.
    </p>
    <aside>
        * Potloodgum bestaat stiekem alleen uit <a
            href="https://www.linkedin.com/in/tjerk-dijkstra/"
            target="_blank">Tjerk</a
        >
    </aside>
</div>

<div class="hoverable">
    <h2>gumgumgumgumgumgumgumgumgumgumgumgumgumgumgumgumgum</h2>
    Teken hieronder waar je hulp nodig bij hebt en verstuur het!

    <div class="canvas-container">
        <Canvas />
    </div>
</div>

<div class="hoverable">
    <h2>werkwerkwerkwerkwerkwerkwerkwerkwerkwerkwerkwerkwerkwerk</h2>

    <div class="logo-container">
        <a href="https://hamaki.pro"><Hamaki /></a>
        <a href="https://sneup.it" target="_blank"><Sneup /> </a>
    </div>
</div>

<style>
    .logo-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        width: 100%;
    }

    .hoverable {
        text-align: center;
    }

    p {
        font-size: 3vw;
    }

    .white-shadow {
        color: #eeeeee;
        text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.15);
    }

    .rotate {
        animation: rotate 2s infinite linear;
    }

    aside {
        font-size: 0.9rem;
        font-style: italic;
        color: #eaeaea;
    }

    h2 {
        color: white;
        text-shadow: -5px 5px 0px #fd71f2;
    }

    .vertical-text {
        display: flex;
        flex-direction: column;
        height: 100px;
        writing-mode: vertical-rl;
        text-orientation: mixed;
    }

    .mirror {
        transform: scaleX(-1);
    }

    .faded-text {
        background: linear-gradient(
            to top,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 1) 100%
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .mirror-container {
        display: flex;
        width: 100%;
        justify-content: center;
        margin-top: var(--baseline);
        height: 78vw;
        margin-bottom: var(--baseline);
    }

    @media (max-width: 600px) {
        .mirror-container {
            height: 265px;
        }
    }

    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>
