import type { opts_I } from './opts_I'
/**
 * Builder Function that returns a sass_style preprocessor for Svelte.
 */
export function sass_style_():sass_style_T {
	return function sass_style(opts:opts_I) {
		const { attributes } = opts
		const { type } = attributes
		if (type !== 'text/scss' && type !== 'text/sass') return
	}
}
export type sass_style_T = (opts:opts_I)=>void
export type sass_style_type = sass_style_T
export {
	sass_style_ as _sass_style,
	sass_style_ as _style__sass,
}
