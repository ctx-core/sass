import sass from 'sass'
import package_importer from 'node-sass-package-importer'
import postcss, { AcceptedPlugin } from 'postcss'
import type { opts_type } from './opts_type'
import type { builder_opts_type } from './builder_opts_type'
import { globalize } from './globalize'
export async function render_sass(
	builder_opts:builder_opts_type, opts:opts_type
):Promise<Plugin_Output> {
	const { postcss_plugins = [] as AcceptedPlugin[] } = builder_opts
	const { filename, content, attributes } = opts
	return new Promise((fulfil, reject)=>{
		sass.render({
			data: content,
			includePaths: ['src'],
			importer: package_importer(),
			functions: builder_opts.functions,
			sourceMap: true,
			outFile: 'x', // this is necessary, but is ignored
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
					from: filename,
				}).css
				: ast.toResult().css
			fulfil({
				code: postcss_result,
				map: result.toString()
			})
		})
	})
}
type Plugin_Output = { code:string, map:string }
