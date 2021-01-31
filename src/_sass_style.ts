import type { opts_type } from './opts_type'
/**
 * Builder Function that returns a sass_style preprocessor for Svelte.
 */
export function _sass_style() {
	return function sass_style(opts:opts_type) {
		const { attributes } = opts
		const { type } = attributes
		if (type !== 'text/scss' && type !== 'text/sass') return
	}
}
export { _sass_style as _style__sass }