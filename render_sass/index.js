import package_importer from 'node-sass-package-importer'
import postcss from 'postcss'
import sass from 'sass'
import { globalize } from '../globalize/index.js'
/**
 * @param builder_opts{import('../_types/index.d.ts').builder_opts_T}
 * @param opts{import('../_types/index.d.ts').opts_T}
 * @returns {Promise<import('./index.d.ts').Plugin_Output>}
 */
export async function render_sass(builder_opts, opts) {
	const { postcss_plugins = [] } = builder_opts
	const {
		filename,
		content,
		attributes
	} = opts
	return new Promise((fulfil, reject)=>{
		sass.render({
			data: content,
			includePaths: [
				'src'
			],
			importer: package_importer(),
			functions: builder_opts.functions,
			sourceMap: true,
			outFile: 'x'
		}, async (err, result)=>{
			if (err) {
				console.trace(`Error in\n${filename}: ${err}`)
				return reject(err)
			}
			const css = result.css.toString()
			let ast = postcss.parse(css)
			if (attributes?.global) ast = globalize(ast)
			const postcss_result =
				postcss_plugins?.length
					? postcss(postcss_plugins).process(ast.toResult().css, {
						from: filename
					}).css
					: ast.toResult().css
			fulfil({
				code: postcss_result,
				map: result.toString()
			})
		})
	})
}
