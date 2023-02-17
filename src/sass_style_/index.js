/**
 * Builder Function that returns a sass_style preprocessor for Svelte.
 */
/**
 * @returns {import('./index.d.ts').sass_style_T}
 */
export function sass_style_() {
	/**
	 * @param opts{import('../_types').opts_T}
	 */
	return function sass_style(opts) {
		const { attributes } = opts
		const { type } = attributes
		if (type !== 'text/scss' && type !== 'text/sass') return
	}
}
export {
	sass_style_ as _sass_style,
	sass_style_ as _style__sass,
}
