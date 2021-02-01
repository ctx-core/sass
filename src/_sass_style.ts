import type { opts_type } from './opts_type'
/**
 * Builder Function that returns a sass_style preprocessor for Svelte.
 */
export function _sass_style():sass_style_type {
	return function sass_style(opts:opts_type) {
		const { attributes } = opts
		const { type } = attributes
		if (type !== 'text/scss' && type !== 'text/sass') return
	}
}
export type sass_style_type = (opts:opts_type) => void
export { _sass_style as _style__sass }