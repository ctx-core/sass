import type { builder_opts_I } from './builder_opts_I.js'
import { sass_style_, sass_style_T } from './sass_style_.js'
import { sass_markup_, sass_markup_T } from './sass_markup_.js'
export function sass_preprocess_(builder_opts:builder_opts_I = {}):sass_preprocess_I {
	const style = sass_style_()
	if (!builder_opts.preprocess_markup) {
		return { style }
	}
	const markup = sass_markup_(builder_opts)
	return { style, markup }
}
export interface sass_preprocess_I {
	style:sass_style_T
	markup?:sass_markup_T
}
export type sass_preprocess_type = sass_preprocess_I
export {
	sass_preprocess_ as preprocess_sass_,
	sass_preprocess_ as _preprocess_sass,
	sass_preprocess_ as _preprocess__sass ,
}
