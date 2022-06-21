<script>
  import { colorschemes } from "$src/stores";

  let colorscheme_index
  let colors = []
  let color

  const addNewColorscheme = () => {
    colorschemes.update(c => [...c, { name: `colorscheme-${c.length}`, colors: [] }])
  }
  // const addNewColor = () => colorschemes.update(c => {
  //   c[colorscheme_index].colors = [ ...c[colorscheme_index].colors, { name: 'red' } ]
  //   return c
  // })
  const addNewColor = () => $colorschemes[colorscheme_index].colors = [
    ...$colorschemes[colorscheme_index].colors, { name: 'red' }]
  console.log($colorschemes)
  console.log($colorschemes.length, colors)
</script>

<div>
  color scheme selector
  {$colorschemes[colorscheme_index]?.name}

  {#if $colorschemes.length != 0}
    <select bind:value={colorscheme_index} name="colorscheme" id="colorscheme-selector">
      {#each $colorschemes as colorscheme, index}
        <option value={index}>{colorscheme.name}</option>
      {/each}
    </select>
  {/if}
  <button on:click={addNewColorscheme}>
    add new colorscheme
  </button>

  colors selector:
  {#if $colorschemes[colorscheme_index]?.colors?.length != 0}
      {#each $colorschemes[colorscheme_index]?.colors ?? [] as color}
        {color.name}
      {/each}
  {/if}
  <button on:click={addNewColor}>
    add new color
  </button>
</div>
