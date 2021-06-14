import type { builder_opts_I } from './builder_opts_I';
import { sass_style_T } from './sass_style_';
import { sass_markup_T } from './sass_markup_';
export declare function preprocess_sass_(builder_opts?: builder_opts_I): preprocess_sass_I;
export interface preprocess_sass_I {
    style: sass_style_T;
    markup?: sass_markup_T;
}
export declare type preprocess_sass_type = preprocess_sass_I;
export { preprocess_sass_ as _preprocess_sass, preprocess_sass_ as _preprocess__sass, };
