<script>
    import Header from "$lib/components/Header.svelte";
</script>

<Header />

<div class="card">
    <div class="card-header">
        <h4 class="my-0 font-weight-normal">Contact me</h4>
    </div>
    <div class="card-body">
        <a href="mailto:tjerk.dijkstra@icloud.com" class="btn btn-lg btn-block">
            Okay, go</a
        >
    </div>
</div>

<section>
    <summary class="rainbow">
        Potloodgum is <a href="https://tjerk.art">Tjerk Dijkstra</a>
        he designs websites and other cool stuff.
    </summary>
</section>

<style>
    section {
        display: flex;
        justify-content: center;
        background: white;
        width: 100%;
        padding: 20px;
        border: 10px solid var(--third-color);
    }

    .btn {
        border-width: 2px;
        border-style: outset;
        border-color: buttonface;
        border-right-color: #424242;
        border-bottom-color: #424242;
        background: silver;
        color: black;
        padding: 0 0 4px;
        border-radius: 1px;
    }
    .btn:hover {
        border: 2px inset #fff;
        background: silver;
        color: #424242;
        box-shadow: -1px -1px #000;
    }
    .btn:focus {
        border: 2px inset #fff !important;
        background: silver;
        color: #424242;
        box-shadow: -1px -1px #000 !important;
        outline: 0 !important;
        background: url(background.bmp);
    }
    .btn:active {
        border: 2px inset #fff !important;
        color: #424242;
    }

    .card {
        margin-bottom: 20px;
        border: solid;
        border-width: 2px;
        border-bottom-color: #424242;
        border-right-color: #424242;
        border-left-color: #fff;
        border-top-color: #fff;
        background: silver;
        color: #212529;
    }

    .card-body {
        padding: 2rem;
    }

    .card-header {
        background: -webkit-linear-gradient(left, #08216b, #a5cef7);
        color: #fff;
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-top: 2px;
        padding-bottom: 1px;
        text-align: left;
    }

    summary {
        max-width: 600px;
        font-size: 1.8rem;
        line-height: 1.5;
        text-align: center;
    }
    summary a {
        text-decoration: none;
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
