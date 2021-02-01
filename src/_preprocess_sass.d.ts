import type { builder_opts_type } from './builder_opts_type';
import { sass_style_type } from './_sass_style';
import { sass_markup_type } from './_sass_markup';
export declare function _preprocess_sass(builder_opts?: builder_opts_type): preprocess_sass_type;
export interface preprocess_sass_type {
    style: sass_style_type;
    markup?: sass_markup_type;
}
export { _preprocess_sass as _preprocess__sass };
