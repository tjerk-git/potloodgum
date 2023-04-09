<script>
    export let src;
    export let alt;
    export let rainbow;
</script>

<figure class={rainbow}>
    <img {src} {alt} />
</figure>

<style>
    figure {
        display: flex;
        justify-content: center;
    }

    figure img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }

    @keyframes rotate {
        100% {
            transform: rotate(1turn);
        }
    }

    .rainbow {
        position: relative;
        z-index: 0;
        border-radius: 10px;
        overflow: hidden;
        padding: 2rem;
    }

    .rainbow::before {
        content: "";
        position: absolute;
        z-index: -2;
        left: -50%;
        top: -50%;
        width: 200%;
        height: 200%;
        background-color: var(--primary-color);
        background-repeat: no-repeat;
        background-size: 50% 50%, 50% 50%;
        background-position: 0 0, 100% 0, 100% 100%, 0 100%;
        background-image: linear-gradient(
                var(--third-color),
                var(--third-color)
            ),
            linear-gradient(var(--secondary-color), var(--secondary-color)),
            linear-gradient(var(--primary-color), var(--primary-color)),
            linear-gradient(var(--primary-color), var(--primary-color));
        animation: rotate 10s linear infinite;
    }

    .rainbow::after {
        content: "";
        position: absolute;
        z-index: -1;
        left: 6px;
        top: 6px;
        width: calc(100% - 12px);
        height: calc(100% - 12px);
        background: white;
        border-radius: 5px;
    }
</style>
