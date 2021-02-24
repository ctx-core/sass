import type { builder_opts_I } from './builder_opts_I';
import { sass_style_T } from './_sass_style';
import { sass_markup_type } from './_sass_markup';
export declare function _preprocess_sass(builder_opts?: builder_opts_I): preprocess_sass_I;
export interface preprocess_sass_I {
    style: sass_style_T;
    markup?: sass_markup_type;
}
export declare type preprocess_sass_type = preprocess_sass_I;
export { _preprocess_sass as _preprocess__sass };
