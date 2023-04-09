<script>
    import Header from "$lib/components/Header.svelte";
    import Image from "$lib/components/Image.svelte";
    import ExternalLink from "$lib/components/ExternalLink.svelte";
    export let data;
</script>

<Header />

<div class="container">
    <div class="column1">
        <h1>
            <ExternalLink src="https://hamaki.app" alt="Hamaki" />
        </h1>
    </div>
    <div class="column2">
        <p>
            {data.description}
        </p>
    </div>
</div>

<section>
    <div class="row">
        {#each data.images as image}
            <div class="column"><Image src={image} alt="Hamaki" /></div>
        {/each}
    </div>
</section>

<style>
    h1 {
        font-weight: 400;
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
    }
</style>
