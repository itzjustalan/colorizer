<script>
	export let colors
	export let color_index
  $: if (!color_index) { color_index = 0 }
  // console.log(colors)
  // $: console.log(colors, color_index)
  // console.log(colors, colors[color_index])
  // $: render_box = colors[color_index]
</script>

<!-- {#if color_index } -->
<!-- {#if colors != []} -->
<!-- {#if colors?.length > color_index } --> <!-- WORKED!! -->
<!-- {#if colors[color_index] !== null} -->
<!-- {#if colors[color_index]} -->
{#if colors?.length > color_index }
  <input type="color" value={colors[color_index]} />
  <!-- <button on:click={(e)=>{ -->
  <!--   console.log(e.target.value) -->
  <!---->
  <!-- }}>{color_index}</button> -->
  <select bind:value={color_index} name="color-selector">
    {#each colors ?? [] as color, index}
      <option value={index} style={`background:${color}`}>
      </option>
    {/each}
  </select>
{/if}




<!-- <input type="color" value={colors[color_index]} on:change={e=>{ -->
<!--   console.log(e.target.value) -->
<!-- }}> -->
<!-- <input type="color" value={colors[color_index]}> -->
<!-- <input type="color" value={colors[color_index]} readonly> -->
<!-- <input type="color" value={colors[color_index]} disabled={true}> -->

<!-- <select bind:value={color_index} name="color-selector"> -->
<!--   {#each colors ?? [] as color, index} -->
<!--     <option value={index} style={`background:${color}`}> -->
<!--     </option> -->
<!--   {/each} -->
<!-- </select> -->
