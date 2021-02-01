import type { opts_type } from './opts_type';
import type { builder_opts_type } from './builder_opts_type';
export declare function _sass_markup(builder_opts?: builder_opts_type): sass_markup_type;
export interface sass_markup_fn_return_type {
    code: string;
    map: null;
}
export declare type sass_markup_type = (opts: opts_type) => Promise<sass_markup_fn_return_type>;
export { _sass_markup as _markup__sass };
