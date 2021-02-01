import type { builder_opts_type } from './builder_opts_type'
import { _sass_style } from './_sass_style'
import { _sass_markup } from './_sass_markup'
export function _preprocess_sass(builder_opts:builder_opts_type = {}) {
	const style = _sass_style()
	if (!builder_opts.preprocess_markup) {
		return { style }
	}
	const markup = _sass_markup(builder_opts)
	return { style, markup }
}
export interface preprocess_sass_type {
	style:string
	markup:string
}
export { _preprocess_sass as _preprocess__sass}