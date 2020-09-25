import { AcceptedPlugin } from 'postcss';
/**
 * Builder Function that returns a sass_style preprocessor for Svelte.
 * @param builder_opts
 */
export declare function _sass_style(builder_opts?: builder_opts_type): (opts: opts_type) => Promise<Plugin_Output> | undefined;
export declare const _style__sass: typeof _sass_style;
/**
 * Default sass_style preprocessor for Svelte.
 * @param opts.filename
 * @param opts.content
 * @param opts.attributes
 */
export declare const sass_style: (opts: opts_type) => Promise<Plugin_Output> | undefined;
export declare const style: (opts: opts_type) => Promise<Plugin_Output> | undefined;
/**
 * Takes a postcss ast & wraps each selector with the `:global()` svelte css directive.
 */
export declare function globalize(ast: any): any;
export declare function _sass_markup(builder_opts?: builder_opts_type): (opts: opts_type) => Promise<{
    code: string;
    map: null;
} | undefined>;
export declare const _markup__sass: typeof _sass_markup;
export declare function _preprocess_sass(builder_opts?: builder_opts_type): {
    style: (opts: opts_type) => Promise<Plugin_Output> | undefined;
    markup: (opts: opts_type) => Promise<{
        code: string;
        map: null;
    } | undefined>;
};
export declare const _preprocess__sass: typeof _preprocess_sass;
declare type builder_opts_type = {
    postcss_plugins?: AcceptedPlugin[];
    functions?: any;
};
declare type Plugin_Output = {
    code: string;
    map: string;
};
declare type opts_type = {
    filename: string;
    content: string;
    attributes: {
        type?: string;
        global?: any;
    };
};
export {};
