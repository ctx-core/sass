/**
 * @typedef AST__PostCSS
 */
declare type builder_opts_type = {
    postcss_plugins?: any[];
    functions?: any;
};
declare type Plugin_Output = {
    code: string;
    map: string;
};
/**
 * Builder Function that returns a style__sass preprocessor for Svelte.
 * @param builder_opts
 * @param builder_opts.postcss_plugins [autoprefixer]: Plugins for postcss
 * @returns {function(*): Promise<{code, map}>}
 */
export declare function _style__sass(builder_opts?: builder_opts_type): (opts: any) => Promise<Plugin_Output>;
/**
 * Default style__sass preprocessor for Svelte.
 * @param opts.filename
 * @param opts.content
 * @param opts.attributes
 * @returns {Promise<{code, map}>} A promise returning `{ code, map }`
 */
export declare const style__sass: (opts: any) => Promise<Plugin_Output>;
export declare const style: (opts: any) => Promise<Plugin_Output>;
/**
 * Takes a postcss ast & wraps each selector with the `:global()` svelte css directive.
 * @param {AST__PostCSS} ast
 * @returns {AST__PostCSS}
 */
export declare function globalize(ast: any): any;
export declare function _markup__sass(builder_opts?: builder_opts_type): (opts: any) => Promise<{
    code: string;
    map: any;
}>;
export declare function _preprocess_sass(builder_opts?: builder_opts_type): {
    style: (opts: any) => Promise<Plugin_Output>;
    markup: (opts: any) => Promise<{
        code: string;
        map: any;
    }>;
};
export declare const _preprocess__sass: typeof _preprocess_sass;
export {};
