<script>
  import { colorschemes } from "$src/stores";
  import { appdata } from "$src/stores";
  import PickBlock from "./pick-block.svelte"

  const addNewColorscheme = () => {
    $appdata.schemedata.push([])
    $appdata.colorscheme_index = $colorschemes.length
    colorschemes.update(c => [...c, { name: `colorscheme-${c.length}`, colors: [] }])
  }
  const addNewColor = () => $colorschemes[$appdata.colorscheme_index].colors = [
    ...$colorschemes[$appdata.colorscheme_index].colors, 'black']
</script>

<div>
  {#if $colorschemes.length != 0}
    selected color scheme:
    {$colorschemes[$appdata.colorscheme_index]?.name??''}
    <br>
    <select bind:value={$appdata.colorscheme_index}>
      {#each $colorschemes as colorscheme, index}
        <option value={index}>{colorscheme.name}</option>
      {/each}
    </select>
  {/if}
  <button on:click={addNewColorscheme}>
    add new colorscheme
  </button>
  <br>
  <br>

  colors:
  {#if $colorschemes.length}
    <button on:click={addNewColor}>
      add new color
    </button>
  {/if}
  {#if $colorschemes[$appdata.colorscheme_index]?.colors?.length}
    {#each $colorschemes[$appdata.colorscheme_index]?.colors ?? [] as color, index}
      <!-- {index}: -->
      <PickBlock bind:color={color} />
    {/each}
  {/if}


  <!-- <button on:click={(e)=>console.log($colorschemes)}>DDDDDDDDD</button> -->
</div>
