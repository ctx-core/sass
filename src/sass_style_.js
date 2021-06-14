/**
 * Builder Function that returns a sass_style preprocessor for Svelte.
 */
export function sass_style_() {
    return function sass_style(opts) {
        const { attributes } = opts;
        const { type } = attributes;
        if (type !== 'text/scss' && type !== 'text/sass')
            return;
    };
}
export { sass_style_ as _sass_style, sass_style_ as _style__sass, };
//# sourceMappingURL=src/sass_style_.js.map