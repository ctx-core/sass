import type { opts_I } from './opts_I';
import type { builder_opts_I } from './builder_opts_I';
export declare function sass_markup_(builder_opts?: builder_opts_I): sass_markup_T;
export interface sass_markup_return_T {
    code: string;
    map: null;
}
export declare type sass_markup_T = (opts: opts_I) => Promise<sass_markup_return_T>;
export { sass_markup_ as _sass_markup, sass_markup_ as _markup__sass, };
