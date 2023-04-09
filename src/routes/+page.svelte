<script lang="ts">
    import Feed from "$lib/images/ffwd.png";
    import Hamaki from "$lib/images/hamaki.png";
    import Sneup from "$lib/images/sneup.png";
    import Sprint from "$lib/images/sprint.png";
    import Image from "$lib/components/Image.svelte";
    import Header from "$lib/components/Header.svelte";
</script>

<Header />

<div class="container">
    <table class="collapse">
        <tbody>
            <tr>
                <td class="fx">
                    <a href="/project/sprintcards"
                        ><Image
                            src={Sprint}
                            alt="Sprint cards design challenge"
                            rainbow="rainbow"
                        />
                    </a>
                </td>
                <td class="gk">
                    <a href="/project/feedforward"
                        ><Image
                            src={Feed}
                            rainbow="rainbow"
                            alt="FFWD cmd feedbacktool"
                        /></a
                    ></td
                >
            </tr>
            <tr>
                <td class="ed">
                    <a href="/project/sneup">
                        <Image
                            src={Sneup}
                            rainbow="rainbow"
                            alt="sneup garagesale"
                        />
                    </a>
                </td>
                <td class="tr"
                    ><a href="/project/hamaki"
                        ><Image
                            src={Hamaki}
                            rainbow="rainbow"
                            alt="Hamaki"
                        /></a
                    ></td
                >
            </tr>
        </tbody>
    </table>
</div>

<style>
    .container {
        margin: 0 auto;
        padding: 1.2rem;
    }

    .collapse {
        border-collapse: collapse;
        width: 100%;
    }

    table {
        border: 5px solid white;
        table-layout: fixed;
    }

    table td {
        border: 3px solid white;
        font-weight: 400;
        font-size: 1.4rem;
        padding: 1.2rem;
    }

    tr {
        border: 3px solid white;
    }

    @media screen and (max-width: 600px) {
        table {
            border: 0;
        }

        table tr {
            border-bottom: 3px solid #fff;
            display: block;
            margin-bottom: 0.625em;
        }

        table td {
            border-bottom: 3px solid #fff;
            display: block;
            font-size: 0.8em;
            text-align: right;
        }

        table td::before {
            content: attr(data-label);
            float: left;
            font-weight: bold;
            text-transform: uppercase;
        }

        table td:last-child {
            border-bottom: 0;
        }
    }
</style>
