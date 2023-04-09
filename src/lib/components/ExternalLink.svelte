<script>
    export let src;
    export let alt;
</script>

{alt}
<a href={src} target="_blank" />

<style>
    @media screen and (max-width: 600px) {
        svg {
            width: 18px;
            height: 18px;
        }
    }
</style>
