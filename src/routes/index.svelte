<script>
  import { appstore } from "$src/stores";
  // import { BaseApp } from "$lib/apps/base";
  // import { Firefox } from "$lib/apps/firefox";
  // console.log(Firefox, $store)
</script>

<section>
<h1>Colorizer</h1>

{#each $appstore as app}
	<li><a href={'/apps/'+app.name.toLowerCase()}>{app.name}</a></li>
{/each}

</section>
