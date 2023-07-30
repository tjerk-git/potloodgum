<script>
    import Hamaki from "$lib/components/Hamaki.svelte";
    import Sneup from "$lib/components/Sneup.svelte";
    import Sprint from "$lib/components/Sprint.svelte";
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
    <h2>
        Denker in pixels, schetser van code, Potloodgum* brengt jouw verhaal
        online.
    </h2>
    <aside>
        * Potloodgum bestaat stiekem alleen uit <a
            rel="me"
            href="https://mastodon.social/@chairk">Tjerk</a
        >
    </aside>

    <div class="skills">
        <h3>Webdevelopment</h3>
        <p>Op maat gemaakte (web)applicaties, front-end en back-end</p>

        <div class="line" />

        <h3>Digital design</h3>
        <p>Hulp voor bijna* alles digitaal (*geen marketing)</p>

        <div class="line" />

        <h3>Design thinking</h3>
        <p>
            Strategie en creativiteit wat betreft het ontwikkelen van alles
            mensgericht
        </p>
    </div>
</section>
<div class="divider" />

<section class="pink">
    <h2 class="turn">werkwerkwerkwerkwerk</h2>
    <h2>werkwerkwerkwerkwerk</h2>

    <div class="line" />

    <div class="logo-container dots">
        <a href="https://hamaki.pro"><Hamaki /></a>
        <a href="https://sneup.it" target="_blank"><Sneup /> </a>
        <a href="https://sprint.cards" target="_blank"><Sprint /> </a>
    </div>
</section>

<style>
    .pink {
        background-color: #c87eae;
    }
    .dots {
        background: linear-gradient(
                    90deg,
                    var(--bg-color) calc(var(--dot-space) - var(--dot-size)),
                    transparent 1%
                )
                center,
            linear-gradient(
                    var(--bg-color) calc(var(--dot-space) - var(--dot-size)),
                    transparent 1%
                )
                center,
            var(--dot-color);
        background-size: var(--dot-space) var(--dot-space);
    }
    .turn {
        transform: rotate(180deg);
    }

    .skills {
        margin-top: var(--baseline);
        grid-column-gap: var(--baseline);
        flex-direction: column;
        justify-content: space-between;
        display: flex;
    }

    .line {
        width: 100%;
        height: 2px;
        perspective-origin: 50%;
        transform-origin: 50%;
        background-color: #1e1e21;
        margin-bottom: var(--baseline);
    }

    .line-vertical {
        width: 2px;
        height: 100%;
        perspective-origin: 50%;
        transform-origin: 50%;
        background-color: #1e1e21;
    }

    .logo-container {
        width: 100%;
        display: flex;
        margin-top: var(--baseline);
        padding: var(--baseline);
    }

    .divider {
        width: 100%;
        height: 10vw;
        background: black;
    }

    section {
        background: white;
        padding: 6.6vw 20px 12vw;
    }

    .white-shadow {
        color: #eeeeee;
        text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.15);
        line-height: normal;
    }

    aside {
        font-size: 2vw;
        font-style: italic;
        color: #262525;
        margin-bottom: calc(var(--baseline) * 4);
        margin-top: var(--baseline);
    }

    h2 {
        color: rgb(31, 29, 29);
        font-size: 6vw;
        font-weight: 600;
        line-height: 100%;
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
</style>
