<script>
  import { appstore } from "$src/stores";
</script>

<section>
<h1>Colorizer</h1>

{#each $appstore as app}
	<li><a href={'/colorizer/apps/'+app.name.toLowerCase()}>{app.name}</a></li>
{/each}

</section>
