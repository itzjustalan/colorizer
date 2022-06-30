<script context="module">
  export const load = (p) => ({ params: p.params });
</script>

<script>
  import { colorschemes } from "$src/stores";
  import { appstore } from "$src/stores";
  import { appdata } from "$src/stores";
  import { page } from "$app/stores";
  import SelectBlock from "$components/colorschemes/select-block.svelte";
  import ColorschemeSelector from "$components/colorschemes/selector.svelte";

  const app = $appstore.find(
    (app) => app.name.toLowerCase() == $page.params.app
  );

  // console.log($appdata.schemedata, "schemedata", $appdata.colorscheme_index);
  const testfn = () => {
    let colors = {};
    for (const [k, v] of Object.entries(
      $appdata.schemedata[$appdata.colorscheme_index]
    )) {
      colors[k] = $colorschemes[$appdata.colorscheme_index]?.colors[v];
    }
    // console.log(colors, app.buildConfig(colors));
  };
</script>


<section>

  <!-- <button
    on:click={(e) => {
      testfn();
      console.log($appdata.schemedata, $appdata.colorscheme_index);
    }}>DDDDDDDDD</button
  > -->

  <a href="/colorizer">go home</a>
  <h1>{app?.name}</h1>

  <ColorschemeSelector />

  {#if $appdata.colorscheme_index || $appdata.colorscheme_index === 0}
    {#each Object.entries(app.colors) as [appcolor, _]}
      <br />
      <SelectBlock
        colors={$colorschemes[$appdata.colorscheme_index]?.colors}
        bind:color_index={$appdata.schemedata[$appdata.colorscheme_index][appcolor]}
        onchange={(e) => {
          $colorschemes[$appdata.colorscheme_index].colors[
            $appdata.schemedata[$appdata.colorscheme_index][appcolor]
          ] = e.target.value;
        }}
      />
      {appcolor}
    {/each}
  {/if}

  <br>
  <br>
  <div>
    {app.buildConfig(app.colors)}
  </div>
  <img src={app.icon} alt={app.name} />
</section>
