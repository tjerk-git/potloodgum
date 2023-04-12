<header>
    <a class="faded-text savage-text" href="/" target="_blank" rel="noopener"
        >POTLOODGUM</a
    >
</header>

<style>
    header {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 20vh;
        background: linear-gradient(
            to left,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 1) 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .faded-text {
        background: linear-gradient(
            to left,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 1) 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .savage-text {
        font-weight: 800;
        animation: gradient-bg 30s ease infinite;
        text-shadow: 0 0 0.3rem rgba(248, 248, 248, 0.4);
        font-size: 6rem;
        text-decoration: none;
    }

    .savage-text:hover {
        transform: skew(-10deg);
        transition: all 200ms ease-in-out;
    }

    @media (max-width: 480px) {
        .savage-text {
            font-size: 3rem;
        }
    }
</style>
