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

<section>
    <h2>De gumfactor</h2>
    <p class="white-shadow">
        Denker in pixels, schetser van code, Potloodgum* brengt jouw verhaal
        online.
    </p>
    <aside>
        * Potloodgum bestaat stiekem alleen uit <a
            rel="me"
            href="https://mastodon.social/@chairk">Tjerk</a
        >
        >
    </aside>
</section>

<section>
    <h2>werkwerkwerkwerk</h2>

    <div class="logo-container">
        <a href="https://hamaki.pro"><Hamaki /></a>
        <a href="https://sneup.it" target="_blank"><Sneup /> </a>
    </div>
</section>

<style>
    .logo-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        width: 100%;
    }

    p {
        font-size: 3.5vw;
    }

    .white-shadow {
        color: #eeeeee;
        text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.15);
        line-height: normal;
    }

    aside {
        font-size: 1vw;
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
        user-select: none;
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
