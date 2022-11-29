<script>
    import Button from "$lib/Key.svelte";
    import Keyboard from "$lib/Keyboard.svelte";
</script>

<h1>Welcome to your library project</h1>
<p>
    Create your package using @sveltejs/package and preview/showcase your work
    with SvelteKit
</p>
<p>
    Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<Keyboard layout={{ rows: [[{ label: "Test" }, { label: "Test2" }]] }} />
