<script>
    import { fade } from "svelte/transition";
    let showMenu = false;

    const toggleMenu = () => {
        showMenu = !showMenu;
    };
</script>

{#if showMenu}
    <div class="menu_container" transition:fade on:click={toggleMenu}>
        <nav>
            <ul class="menu">
                <li>
                    <a href="/">Projects</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </nav>
    </div>
{/if}

<a class="button" on:click={toggleMenu}>
    <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
        width="100%"
        id="blobSvg"
        style="opacity: 1;"
        filter="blur(0px)"
        transform="rotate(53)"
    >
        <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color: rgb(209, 82, 232);" />
                <stop offset="100%" style="stop-color: rgb(239, 98, 159);" />
            </linearGradient>
        </defs>
        <path id="blob" fill="url(#gradient)" style="opacity: 1;"
            ><animate
                attributeName="d"
                dur="14.3s"
                repeatCount="indefinite"
                values="M436.87032,349.05548Q408.4258,448.11097,306.06935,451.62968Q203.7129,455.14839,157.4258,385.87516Q111.13871,316.60194,93.22677,241.12968Q75.31484,165.65742,135.48613,87.80097Q195.65742,9.94452,281.80097,56.34258Q367.94452,102.74064,416.62968,176.37032Q465.31484,250,436.87032,349.05548Z;M400,314Q352,378,277,420Q202,462,143,396Q84,330,66.5,241.5Q49,153,125.5,97.5Q202,42,298.5,55Q395,68,421.5,159Q448,250,400,314Z;M411.71818,339.87391Q393.61186,429.74783,302.23794,426.16285Q210.86403,422.57787,122.32727,388.31581Q33.79051,354.05375,61.55534,263.35692Q89.32016,172.66008,145.95613,107.46324Q202.59209,42.2664,289.95613,66.5581Q377.32016,90.8498,403.57233,170.4249Q429.82451,250,411.71818,339.87391Z;M390.7302,319.10952Q360.37524,388.21905,284.62068,409.39959Q208.86612,430.58014,161.11156,373.20082Q113.35701,315.8215,88.46857,238.04463Q63.58014,160.26776,136.76776,117.04463Q209.95537,73.8215,303.79007,69.52027Q397.62476,65.21905,409.35497,157.60952Q421.08517,250,390.7302,319.10952Z;M436.87032,349.05548Q408.4258,448.11097,306.06935,451.62968Q203.7129,455.14839,157.4258,385.87516Q111.13871,316.60194,93.22677,241.12968Q75.31484,165.65742,135.48613,87.80097Q195.65742,9.94452,281.80097,56.34258Q367.94452,102.74064,416.62968,176.37032Q465.31484,250,436.87032,349.05548Z"
            /></path
        ></svg
    >
</a>

<style>
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
    .button {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 999;
    }

    .button svg {
        width: 100px;
        height: 100px;
    }
    .menu_container {
        width: 100vw;
        height: 100vh;
        background: var(--primary-color);
        transition: all 1s;
    }
    .menu_container ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .menu_container ul li {
        padding: 20px;
        text-align: center;
        font-weight: 400px;
        font-size: 8rem;
    }

    .menu_container ul li a {
        color: white;
        text-decoration: none;
        transition: all 0.3s ease;
    }

    .menu_container ul li a:hover {
        text-decoration: underline;
    }
</style>
