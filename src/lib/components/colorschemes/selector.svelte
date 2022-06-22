<script>
  import { colorschemes } from "$src/stores";
  import { appdata } from "$src/stores";
  import PickBlock from "./pick-block.svelte"


  const addNewColorscheme = () => {
    colorschemes.update(c => [...c, { name: `colorscheme-${c.length}`, colors: [] }])
  }
  // const addNewColor = () => colorschemes.update(c => {
  //   c[$appdata.colorscheme_index].colors = [ ...c[$appdata.colorscheme_index].colors, { name: 'red' } ]
  //   return c
  // })
  const addNewColor = () => $colorschemes[$appdata.colorscheme_index].colors = [
    ...$colorschemes[$appdata.colorscheme_index].colors, 'black']
  console.log($colorschemes)
  console.log($colorschemes.length)
</script>

<div>
  color scheme selector
  {$colorschemes[$appdata.colorscheme_index]?.name}

  {#if $colorschemes.length != 0}
    <select bind:value={$appdata.colorscheme_index}>
      {#each $colorschemes as colorscheme, index}
        <option value={index}>{colorscheme.name}</option>
      {/each}
    </select>
  {/if}
  <button on:click={addNewColorscheme}>
    add new colorscheme
  </button>

  colors selector:
  {#if $colorschemes[$appdata.colorscheme_index]?.colors?.length != 0}
      {#each $colorschemes[$appdata.colorscheme_index]?.colors ?? [] as color, index}
        {index}:<PickBlock bind:color={color} />
      {/each}
  {/if}
  <button on:click={addNewColor}>
    add new color
  </button>


  <button on:click={(e)=>console.log($colorschemes)}>DDDDDDDDD</button>
</div>
