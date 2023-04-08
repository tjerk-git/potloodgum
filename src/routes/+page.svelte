<script lang="ts">
    import Feed from "$lib/images/ffwd.png";
    import Hamaki from "$lib/images/hamaki.png";
    import Sneup from "$lib/images/sneup.jpeg";
    import Sprint from "$lib/images/sprint.png";
    import Image from "$lib/components/Image.svelte";
</script>

<header>
    <a class="faded-text savage-text" href="/" target="_blank" rel="noopener"
        >POTLOODGUM</a
    >
</header>

<div class="row">
    <div class="column">
        <Image src={Sneup} alt="Sneup" />
    </div>
    <div class="column"><Image src={Sprint} alt="Hamaki" /></div>

    <div class="column"><Image src={Feed} alt="Hamaki" /></div>

    <div class="column"><Image src={Hamaki} alt="Hamaki" /></div>
</div>

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

    .row {
        display: flex;
        flex-wrap: wrap;
        padding: 0 10px;
    }

    /* Create four equal columns that sits next to each other */
    .column {
        flex: 25%;
        max-width: 25%;
        padding: 1rem;
    }

    /* Responsive layout - makes a two column-layout instead of four columns */
    @media screen and (max-width: 800px) {
        .column {
            flex: 50%;
            max-width: 50%;
        }
    }

    /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
    @media screen and (max-width: 600px) {
        .column {
            flex: 100%;
            max-width: 100%;
        }

        .savage-text {
            font-size: 2rem;
        }
    }

    @media only screen and (max-width: 480px) {
        .savage-text {
            font-size: 2rem !important;
        }
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
        font-size: 5rem;
        text-decoration: none;
    }

    .savage-text:hover {
        transform: skew(-10deg);
        transition: all 200ms ease-in-out;
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
