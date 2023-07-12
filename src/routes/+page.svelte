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
    Denker in pixels, schetser van code, Potloodgum* brengt jouw verhaal online.

    <aside>
        * Potloodgum bestaat stiekem alleen uit <a
            href="https://www.linkedin.com/in/tjerk-dijkstra/"
            target="_blank">Tjerk</a
        >
    </aside>
</div>

<style>
    aside {
        font-size: 0.4rem;
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
        height: 810px;
        margin-bottom: var(--baseline);
    }

    @media (max-width: 600px) {
        .mirror-container {
            height: 265px;
        }
    }
</style>
