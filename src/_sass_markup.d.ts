import type { opts_I } from './opts_I';
import type { builder_opts_I } from './builder_opts_I';
export declare function _sass_markup(builder_opts?: builder_opts_I): sass_markup_type;
export interface sass_markup_fn_return_type {
    code: string;
    map: null;
}
export declare type sass_markup_type = (opts: opts_I) => Promise<sass_markup_fn_return_type>;
export { _sass_markup as _markup__sass };
