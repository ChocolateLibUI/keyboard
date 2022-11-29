<script lang="ts">
    import Key from "./Key.svelte";
    import type { CustomKeyboard } from "./types";

    export let layout: CustomKeyboard;
</script>

{#each layout.rows as row}
    {#each row as key}
        <Key label={key.label} />
    {/each}
{/each}

<style>
</style>
