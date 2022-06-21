<script context="module">
  export const load = (p) => ({ params: p.params })
</script>

<script>
  import { appstore } from "$src/stores"
  import { page } from '$app/stores'
  import ColorschemeSelector from "$components/colorscheme-selector.svelte"
  const app = $appstore.find(app => app.name.toLowerCase() == $page.params.app)
  // console.log($page, app)
</script>

<section>
<h1>{app.name}</h1>
  <ColorschemeSelector />
  <img src={app.icon} alt={app.name}>
  <div>{app.buildConfig(app.colors)}<div>

</section>
