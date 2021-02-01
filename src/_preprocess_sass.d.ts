import type { builder_opts_type } from './builder_opts_type';
export declare function _preprocess_sass(builder_opts?: builder_opts_type): {
    style: import("./_sass_style").sass_style_type;
    markup?: undefined;
} | {
    style: import("./_sass_style").sass_style_type;
    markup: (opts: import("./opts_type").opts_type) => Promise<{
        code: string;
        map: null;
    } | undefined>;
};
export interface preprocess_sass_type {
    style: string;
    markup: string;
}
export { _preprocess_sass as _preprocess__sass };
