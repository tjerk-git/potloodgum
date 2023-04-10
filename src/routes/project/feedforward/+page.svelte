<script>
    import Header from "$lib/components/Header.svelte";
    import Feed from "$lib/images/ffwd_big.png";
    import Arrow from "$lib/components/Arrow.svelte";
    import Image from "$lib/components/Image.svelte";
</script>

<Header />

<div class="container rainbow">
    <div class="column1">
        <div class="controls">
            <a href="/"> <Arrow /></a>

            <h1>Feedforward</h1>
        </div>
    </div>
    <div class="column2">
        <p>
            Feedforward is a student progress tracking application for design
            students. It allows for periodic feedback from teachers. It's design
            is centered around assessments and feedback.
        </p>

        <a class="button" href="https://app.ffwd.school">
            Visit this project (requires login) <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="white"
                viewBox="0 0 24 24"
                ><path
                    d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"
                /></svg
            ></a
        >
    </div>
</div>

<section>
    <div class="row">
        <div class="column"><Image src={Feed} alt="FFWD" rainbow="" /></div>
    </div>
</section>

<style>
    .controls {
        display: flex;
        align-items: center;
    }

    .button {
        display: flex;
        align-items: center;
        background-color: var(--secondary-color);
        padding: 1.2rem;
        border-radius: 20px;
        color: white;
        max-width: 220px;
        justify-content: space-around;
        text-decoration: none;
    }

    .controls a {
        margin-right: 20px;
    }

    h1 {
        font-weight: 400;
        font-size: 3rem;
    }

    .container {
        background: white;
        margin-left: 20px;
        margin-right: 20px;
        display: flex;
        flex-wrap: wrap;
        border-bottom: 10px solid var(--third-color);
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    }

    .column1,
    .column2 {
        flex: 1;
        margin: 1rem;
    }

    p {
        font-size: 1.2rem;
        margin-bottom: 20px;
    }

    section {
        margin-left: 20px;
        margin-right: 20px;
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

    @keyframes rotate {
        100% {
            transform: rotate(1turn);
        }
    }

    .rainbow {
        position: relative;
        z-index: 0;
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
        animation: rotate 20s linear infinite;
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
