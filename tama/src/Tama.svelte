<script lang="ts">
    import { onMount } from "svelte";
    import Game from "./game/game";
    let canvas: any;
    onMount(async () => {
        let game = new Game(canvas);
        game.setup();
        game.run();
    });
</script>

<main>
    <h1>Tama</h1>
    <canvas id="renderCanvas" bind:this={canvas}></canvas>
</main>

<style>
    main {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    canvas {
        border: 4px solid var(--border);
        margin-top: 4rem;
        width: 100%;
        min-width: 720px;
        background-color: var(--background-secondary);
    }
</style>
