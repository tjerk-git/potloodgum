<script>
    export let src;
    export let alt;
</script>

<figure>
    <img {src} {alt} />
</figure>

<style>
    figure {
        position: relative;
        overflow: hidden;
        border-radius: 20px;
    }

    figure img {
        transition: transform 0.5s ease-in-out;
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }

    figure:hover img {
        transform: scale(1.2);
    }

    figure:hover::before {
        transform: skewX(0deg);
        left: 0;
    }
</style>
