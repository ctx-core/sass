import { sass_style_ } from './sass_style_';
import { sass_markup_ } from './sass_markup_';
export function preprocess_sass_(builder_opts = {}) {
    const style = sass_style_();
    if (!builder_opts.preprocess_markup) {
        return { style };
    }
    const markup = sass_markup_(builder_opts);
    return { style, markup };
}
export { preprocess_sass_ as _preprocess_sass, preprocess_sass_ as _preprocess__sass, };
//# sourceMappingURL=src/preprocess_sass_.js.map