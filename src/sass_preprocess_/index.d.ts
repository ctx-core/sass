import type { builder_opts_T } from '../_types'
import type { sass_markup_T } from '../sass_markup_'
import type { sass_style_T } from '../sass_style_'
export declare function sass_preprocess_(builder_opts?:builder_opts_T):sass_preprocess_T
export interface sass_preprocess_T {
	style:sass_style_T
	markup?:sass_markup_T
}
export declare type sass_preprocess_I = sass_preprocess_T
export declare type sass_preprocess_type = sass_preprocess_T
export {
	sass_preprocess_ as preprocess_sass_,
	sass_preprocess_ as _preprocess_sass,
	sass_preprocess_ as _preprocess__sass,
}
