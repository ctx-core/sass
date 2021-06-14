import sass from 'sass';
import package_importer from 'node-sass-package-importer';
import postcss from 'postcss';
import { globalize } from './globalize';
export async function render_sass(builder_opts, opts) {
    const { postcss_plugins = [] } = builder_opts;
    const { filename, content, attributes } = opts;
    return new Promise((fulfil, reject) => {
        sass.render({
            data: content,
            includePaths: ['src'],
            importer: package_importer(),
            functions: builder_opts.functions,
            sourceMap: true,
            outFile: 'x', // this is necessary, but is ignored
        }, async (err, result) => {
            if (err) {
                console.trace(`Error in\n${filename}: ${err}`);
                return reject(err);
            }
            const css = result.css.toString();
            let ast = postcss.parse(css);
            if (attributes === null || attributes === void 0 ? void 0 : attributes.global)
                ast = globalize(ast);
            const postcss_result = (postcss_plugins === null || postcss_plugins === void 0 ? void 0 : postcss_plugins.length)
                ? postcss(postcss_plugins).process(ast.toResult().css, {
                    from: filename,
                }).css
                : ast.toResult().css;
            fulfil({
                code: postcss_result,
                map: result.toString()
            });
        });
    });
}
//# sourceMappingURL=src/render_sass.js.map