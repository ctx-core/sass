import type { builder_opts_type } from './builder_opts_type';
export declare function _preprocess_sass(builder_opts?: builder_opts_type): {
    style: (opts: import("./opts_type").opts_type) => void;
    markup?: undefined;
} | {
    style: (opts: import("./opts_type").opts_type) => void;
    markup: (opts: import("./opts_type").opts_type) => Promise<{
        code: string;
        map: null;
    } | undefined>;
};
export { _preprocess_sass as _preprocess__sass };
