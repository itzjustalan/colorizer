<script context="module">
  export const load = (p) => ({ params: p.params })
</script>

<script>
  import { colorschemes } from "$src/stores";
  import { appstore } from "$src/stores"
  import { appdata } from "$src/stores"
  import { page } from '$app/stores'
  import SelectBlock from "$components/colorschemes/select-block.svelte"
  import ColorschemeSelector from "$components/colorschemes/selector.svelte"
  const app = $appstore.find(app => app.name.toLowerCase() == $page.params.app)
  // const schemedata = {}
</script>

  <button on:click={(e)=>{
    // console.log($page, app, $colorschemes)
    console.log($colorschemes[$appdata.colorscheme_index]?.name, $appdata.colorscheme_index)
    console.log($appdata.schemedata, 'schemedata')
    // console.log({$appdata[$colorschemes[$appdata.colorscheme_index]?.name][appcolor]?.color_index})

  }}>DDDDDDDDD</button>

<section>
<h1>{app?.name}</h1>
  <ColorschemeSelector />

    <div>now create places for all color values to be populated with the ones from a color scheme also should be nice to rename color schemes</div>
  <!-- <img src={app.icon} alt={app.name}> -->

      <!-- {#each Object.entries(app.colors) as appcolor} -->
      <!--   <br>{appcolor} -->
      <!--   <SelectBlock {appcolor} color_index={$appdata[$colorschemes[$appdata.colorscheme_index]][appcolor]?.color_index} colors={$colorschemes[$appdata.colorscheme_index].colors}/> -->
      <!-- {/each} -->


      {#each Object.entries(app.colors) as [appcolor, value]}
        <br>{appcolor}
        <SelectBlock bind:color_index={$appdata.schemedata[appcolor]} colors={$colorschemes[$appdata.colorscheme_index]?.colors}/>
      {/each}




  <img src={app.icon} alt={app.name}>
  <div>{app.buildConfig(app.colors)}<div>
</section>
