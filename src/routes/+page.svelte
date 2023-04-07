<script lang="ts">
    import Logo from "$lib/images/eraser.png";
</script>

<div id="navbar" class="navbar fixed-top bg-transparent">
    <div id="navbar-grid" class="container">
        <a
            id="navbar-link"
            class="text-decoration-none savage-text"
            href="https://verysavage.com"
            target="_blank"
            rel="noopener">POTLOODGUM</a
        >
    </div>
</div>

<div class="container my-2 py-5">
    <div id="portfolio-grid">
        <div id="project-1" class="portfolio-item bg-danger">
            <a href="#" class="item-link">
                <div class="item-overlay" />
                <picture>
                    <source
                        srcset="https://source.unsplash.com/1600x800/?red,abstract"
                        media="(min-width: 768px)"
                    />
                    <source
                        srcset="https://source.unsplash.com/800x800/?red,abstract"
                    />
                    <img
                        class="img-fluid"
                        src="https://source.unsplash.com/800x800/?red,abstract"
                    />
                </picture>
                <div class="item-caption">
                    <h3>Hamaki</h3>
                    <p>Personal planning made easy</p>
                </div>
            </a>
        </div>

        <div id="project-2" class="portfolio-item bg-danger">
            <a href="#" class="item-link">
                <div class="item-overlay" />
                <img
                    class="img-fluid"
                    src="https://source.unsplash.com/800x800/?green,abstract"
                />
                <div class="item-caption">
                    <h3>Project 2</h3>
                    <p>Some subtext sentence</p>
                </div>
            </a>
        </div>

        <div id="project-3" class="portfolio-item bg-danger">
            <a href="#" class="item-link">
                <div class="item-overlay" />
                <img
                    class="img-fluid"
                    src="https://source.unsplash.com/800x800/?blue,abstract"
                />
                <div class="item-caption">
                    <h3>Project 3</h3>
                    <p>Some subtext sentence</p>
                </div>
            </a>
        </div>

        <div id="project-4" class="portfolio-item bg-danger">
            <a href="#" class="item-link">
                <div class="item-overlay" />
                <img
                    class="img-fluid"
                    src="https://source.unsplash.com/800x800/?white,abstract"
                />
                <div class="item-caption">
                    <h3>Project 4</h3>
                    <p>Some subtext sentence</p>
                </div>
            </a>
        </div>

        <div id="project-5" class="portfolio-item bg-danger">
            <a href="#" class="item-link">
                <div class="item-overlay" />
                <img
                    class="img-fluid"
                    src="https://source.unsplash.com/800x800/?black,abstract"
                />
                <div class="item-caption">
                    <h3>Project 5</h3>
                    <p>Some subtext sentence</p>
                </div>
            </a>
        </div>
    </div>
</div>

<style>
    /* grid layout */

    #portfolio-grid {
        display: grid;
        grid-gap: 5px;
    }

    @media (min-width: 768px) {
        #portfolio-grid {
            grid-template-columns: repeat(2, 1fr);
        }

        #project-1 {
            grid-area: span 1 / span 2;
        }
    }

    /* items */

    .portfolio-item {
        position: relative;
    }

    .item-overlay {
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        background-color: #000;
        content: "";
        height: 100%;
        top: 0;
        left: 0;
        opacity: 0.05;
        position: absolute;
        transition: opacity 0.25s ease;
        width: 100%;
        will-change: opacity;
        z-index: 2;
    }

    .item-link:hover > .item-overlay {
        opacity: 0.4;
    }

    .item-caption {
        color: #fafafa;
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        overflow: hidden;
        padding: 2rem;
        z-index: 3;
        text-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.4);
    }

    /* savage */

    #navbar-grid {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
    }

    #navbar-link {
        grid-area: span 1 / span 1;
        justify-self: end;
        align-self: center;
        font-size: 5.75rem;
    }

    .savage-text {
        font-weight: 800;
        background: #8f43f6; /* fallback for old browsers */
        background: -webkit-linear-gradient(
            to right,
            #8f43f6,
            #ff8b57
        ); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(
            to right,
            #8f43f6,
            #ff8b57
        ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: gradient-bg 30s ease infinite;
        text-shadow: 0 0 0.3rem rgba(248, 248, 248, 0.4);
    }

    .savage-text:hover {
        transform: skew(-10deg);
        transition: all 200ms ease-in-out;
    }

    .brand {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 20vh;
    }

    .payoff p {
        color: white;
        margin-left: 50px;
    }

    h1 {
        font-size: 5rem;
        color: #fff;
        font-weight: 400;
    }

    @media screen and (max-width: 600px) {
        h1 {
            font-size: 3rem;
        }
    }

    .gradient {
        background: linear-gradient(-45deg, #ffeb3b, #74efff, #9c27b0);
        background-size: 400% 400%;
        animation: gradient-bg 20s ease infinite;
    }

    @keyframes gradient-bg {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
</style>
