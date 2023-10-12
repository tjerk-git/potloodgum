<script>
    import Hamaki from "$lib/components/Hamaki.svelte";
    import Sneup from "$lib/components/Sneup.svelte";
    import Sprint from "$lib/components/Sprint.svelte";
    import Logo from "$lib/components/Logo.svelte";
    import Arrow from "$lib/components/Arrow.svelte";
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
    <Logo />
    <h1 class="smaller-text">
        Denker in pixels, schetser van code, Potloodgum brengt jouw verhaal
        gratis* online.
    </h1>
    <aside>
        - <a rel="me" href="https://mastodon.design/@potloodgum">Tjerk</a>
    </aside>

    <h2>Vraag & Antwoord</h2>
    <div class="line" />
    <div class="qa-pair">
        <strong>Vraag:</strong> Hoezo gratis?
        <p>
            <strong>Antwoord:</strong> Nee, niet helemaal gratis, een kleine bijdrage
            voor de hosting. Die doe ik zo klimaatneutraal mogelijk trouwens.
        </p>
    </div>

    <div class="qa-pair">
        <strong>Vraag:</strong> Wat kan je maken dan?
        <p>
            <strong>Antwoord:</strong> Op maat gemaakte (web)applicaties, front-end
            en back-end.
        </p>
    </div>

    <div class="qa-pair">
        <strong>Vraag:</strong> Hoe kom ik in contact met jou?
        <p>
            <strong>Antwoord:</strong> Neem <a href="/contact">hier</a> eens een
            kijkje.
        </p>
    </div>
    <div class="qa-pair">
        <strong>Vraag:</strong> Waarom doe je dit?
        <p>
            <strong>Antwoord:</strong> Nou, andere mensen doe vrijwilligerswerk,
            ik doe dit.
        </p>
    </div>
</section>

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

    .smaller-text {
        font-size: 3.5vw;
        font-weight: 400;
    }

    .line {
        width: 100%;
        height: 2px;
        perspective-origin: 50%;
        transform-origin: 50%;
        background-color: #1e1e21;
        margin-bottom: var(--baseline);
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
        height: 120vh;
        margin-bottom: var(--baseline);
    }

    .qa-pair {
        background-color: #f7f7f7;
        padding: 10px;
        margin: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    .qa-pair strong {
        font-weight: bold;
    }

    .qa-pair p {
        margin-top: 5px;
    }
</style>
