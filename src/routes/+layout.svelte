<script lang="ts">
    import favicon from "$lib/assets/favicon.svg";
    import "the-new-css-reset/css/reset.css";

    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}

<style>
    /* :global(body) {
        height: 100lvh;
    } */

    /* :global(.global-config) {
        --timing-function: cubic-bezier(0.19, 1, 0.22, 1);
        --full-page-height: 100lvh;
    } */
    :global(*) {
        margin: 0;
    }

    :global(html, body) {
        height: 100%;
        width: 100%;
    }

    :global(body) {
        background: #1f1f1f;
        color: #a5a5a5;
        font-family: monospace;
        font-size: 1em;
    }
</style>
