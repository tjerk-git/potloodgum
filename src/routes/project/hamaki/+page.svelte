<script>
    import Header from "$lib/components/Header.svelte";
    import ExternalLink from "$lib/components/ExternalLink.svelte";
    import HamakiGif from "$lib/images/hamaki.gif";
    import Hamaki from "$lib/images/hamaki.png";
    import Arrow from "$lib/components/Arrow.svelte";
    import Image from "$lib/components/Image.svelte";
</script>

<Header />

<div class="container">
    <div class="column1">
        <div class="controls">
            <a href="/"> <Arrow /></a>

            <h1>
                <ExternalLink src="https://hamaki.pro/" alt="Hamaki" />
            </h1>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                ><path
                    d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"
                /></svg
            >
        </div>
    </div>
    <div class="column2">
        <p>
            Hamaki allows you to draw in your own calendar to automagickly
            &#8482; create a spot schedule and then people can sign up for spots
            easily no accounts required.
        </p>
    </div>
</div>

<section>
    <div class="row">
        <div class="column"><Image src={Hamaki} alt="hamaki" rainbow="" /></div>
        <div class="column">
            <Image src={HamakiGif} alt="hamaki" rainbow="" />
        </div>
    </div>
</section>

<style>
    .controls {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }

    h1 {
        font-weight: 400;
        font-size: 5rem;
    }

    .container {
        background: white;
        max-width: 1160px;
        margin: 0 auto;
        padding: 1.2rem;
        display: flex;
        flex-wrap: wrap;
        border-bottom: 10px solid var(--third-color);
    }

    .column1,
    .column2 {
        flex: 1;
        margin: 1rem;
    }

    p {
        font-size: 1.4rem;
    }

    section {
        max-width: 1160px;
        margin: 0 auto;
        background: white;
        padding: 1rem;
        border-bottom: 10px solid var(--third-color);
    }

    .row {
        display: flex;
        padding: 10px;
        gap: 20px;
    }

    .column {
        flex: 1;
        background: white;
    }

    @media (max-width: 480px) {
        .row {
            flex-direction: column;
        }

        h1 {
            font-weight: 400;
            font-size: 3rem;
        }
    }
</style>
