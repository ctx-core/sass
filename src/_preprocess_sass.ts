import type { builder_opts_I } from './builder_opts_I'
import { _sass_style, sass_style_T } from './_sass_style'
import { _sass_markup, sass_markup_type } from './_sass_markup'
export function _preprocess_sass(builder_opts:builder_opts_I = {}):preprocess_sass_I {
	const style = _sass_style()
	if (!builder_opts.preprocess_markup) {
		return { style }
	}
	const markup = _sass_markup(builder_opts)
	return { style, markup }
}
export interface preprocess_sass_I {
	style:sass_style_T
	markup?:sass_markup_type
}
export type preprocess_sass_type = preprocess_sass_I
export { _preprocess_sass as _preprocess__sass }
