<script>
	export let colors
  export let onchange
	export let color_index
  $: if (!color_index) { color_index = 0 }
</script>

<!-- maybe on click add a fn to update that color? -->
{#if colors?.length > color_index }
  <input type="color" value={colors[color_index]} on:change={onchange} />
  <!-- <button on:click={console.log}>{color_index}</button> -->
  <select bind:value={color_index} name="color-selector">
    {#each colors ?? [] as color, index}
      <option value={index} style={`background:${color}`}>
      </option>
    {/each}
  </select>
{/if}
