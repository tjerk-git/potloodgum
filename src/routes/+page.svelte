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

<style>
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
        height: 50vh;
        justify-content: center;
    }
    .payoff-container {
        display: flex;
        justify-content: center;
    }
</style>
