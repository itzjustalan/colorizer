import { readable, writable } from 'svelte/store'
import { Firefox } from '$lib/apps/firefox'
import { Mutt } from '$lib/apps/mutt'

export const colorschemes = writable([])

export const appstore = readable({}, (set) => {
	const apps = [Firefox, Mutt]

  set(apps)
	// set(apps.reduce((_, c) => c.name = c, {}))

	return () => {};
});
