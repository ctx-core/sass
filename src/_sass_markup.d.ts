import type { opts_type } from './opts_type';
import type { builder_opts_type } from './builder_opts_type';
export declare function _sass_markup(builder_opts?: builder_opts_type): (opts: opts_type) => Promise<{
    code: string;
    map: null;
} | undefined>;
export { _sass_markup as _markup__sass };
