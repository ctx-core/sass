import { sass_markup_ } from '../sass_markup_/index.js'
import { sass_style_ } from '../sass_style_/index.js'
/**
 * @param builder_opts{import('../_types/index.d.ts').builder_opts_T}
 * @returns {import('./index.d.ts').sass_preprocess_T}
 */
export function sass_preprocess_(builder_opts = {}) {
	const style = sass_style_()
	if (!builder_opts.preprocess_markup) {
		return {
			style
		}
	}
	const markup = sass_markup_(builder_opts)
	return {
		style,
		markup
	}
}
export {
	sass_preprocess_ as preprocess_sass_,
	sass_preprocess_ as _preprocess_sass,
	sass_preprocess_ as _preprocess__sass,
}
