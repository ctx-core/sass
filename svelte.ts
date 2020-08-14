import sass from 'node-sass'
import autoprefixer from 'autoprefixer'
import importer__package from 'node-sass-package-importer'
import postcss from 'postcss'
import { parseDOM } from 'htmlparser2/lib'
import { Tag } from 'domelementtype'
import { getOuterHTML } from 'domutils/lib/stringify'
import cheerio from 'cheerio'
import {
	each, map, compact, flatten, _a1_present,
} from '@ctx-core/array'
import { splice__str } from '@ctx-core/string'
/**
 * @typedef AST__PostCSS
 */
type builder_opts_type = {
	postcss_plugins?:any[],
	functions?: any,
}
type Plugin_Output = { code:string, map:string }
async function render_sass(builder_opts:builder_opts_type, opts):Promise<Plugin_Output> {
	const { postcss_plugins = [autoprefixer] } = builder_opts
	const { filename, content, attributes } = opts
	return new Promise((fulfil, reject)=>{
		sass.render({
			data: content,
			includePaths: ['src'],
			importer: importer__package(),
			functions: builder_opts.functions,
			sourceMap: true,
			outFile: 'x', // this is necessary, but is ignored
		}, async (err, result)=>{
			if (err) {
				console.error(`Error in\n${filename}`)
				return reject(err)
			}
			const css = result.css.toString()
			let ast = postcss.parse(css)
			if (attributes?.global) ast = globalize(ast)
			const result__ =
				await postcss(postcss_plugins).process(ast.toResult().css, {
					from: filename,
				})
			fulfil({
				code: result__.css,
				map: result.map.toString()
			})
		})
	})
}
/**
 * Builder Function that returns a style__sass preprocessor for Svelte.
 * @param builder_opts
 * @param builder_opts.postcss_plugins [autoprefixer]: Plugins for postcss
 * @returns {function(*): Promise<{code, map}>}
 */
export function _style__sass(builder_opts:builder_opts_type = {}) {
	return function style__sass(opts) {
		const { attributes } = opts
		const { type } = attributes
		if (type !== 'text/scss' && type !== 'text/sass') return
		return render_sass(builder_opts, opts)
	}
}
/**
 * Default style__sass preprocessor for Svelte.
 * @param opts.filename
 * @param opts.content
 * @param opts.attributes
 * @returns {Promise<{code, map}>} A promise returning `{ code, map }`
 */
export const style__sass = _style__sass()
export const style = style__sass
/**
 * Takes a postcss ast & wraps each selector with the `:global()` svelte css directive.
 * @param {AST__PostCSS} ast
 * @returns {AST__PostCSS}
 */
export function globalize(ast) {
	let selector = '' + (ast.selector || '')
	if (selector) {
		const splice_arg_a2 = []
		const selector_length = selector.length
		let idx = 0
		const global_str = ':global('
		const global_str_len = global_str.length
		do {
			const begin_idx = selector.indexOf(global_str, idx)
			if (begin_idx === -1) break
			splice_arg_a2.push([begin_idx, global_str_len])
			idx = begin_idx + global_str_len
			let paren_rc = 1
			let char
			do {
				char = selector.slice(idx, idx + 1)
				if (char === ')') paren_rc -= 1
				else if (char === '(') paren_rc += 1
				idx += 1
			} while (paren_rc && char != null && idx < selector_length)
			splice_arg_a2.push([idx - 1, 1])
		} while (idx !== -1 && idx < selector_length)
		for (let i = splice_arg_a2.length - 1; i >= 0; i -= 1) {
			const splice_arg_a1 = splice_arg_a2[i]
			selector = splice__str(selector, ...splice_arg_a1)
		}
//		selector.split(/[\s+[>\+\~]\s*]/)
		ast.selector = `:global(${selector})`
//		ast.selector = `:global(${selector.replace(/:global\((.*)\)/g, '$1')})`
	}
	each(ast.nodes, globalize)
	return ast
}
export function _markup__sass(builder_opts:builder_opts_type = {}) {
	return async opts=>{
		const { filename, content, attributes, } = opts
		const dom = parseDOM(content, {
			lowerCaseTags: false,
			lowerCaseAttributeNames: false,
		})
		const promise_a1 = map(dom, async node=>{
			if (
				node.type === Tag
				&& node.name == 'svelte:head'
			) {
				const $ = cheerio.load(node)
				const promise_a1 = map(
					$(`style[type='text/sass'], style[type='text/scss']`),
					async style_node=>{
						const text_node = style_node.firstChild
						const { data } = text_node
						const { code } = await render_sass(builder_opts, {
							filename,
							content: data,
							attributes,
						})
						style_node.attribs.type = 'text/css'
						delete style_node.attribs.global
						text_node.data = code
						return style_node
					})
				return Promise.all(promise_a1)
			}
		})
		const node_a1 = await Promise.all(promise_a1)
		if (_a1_present(flatten(compact(node_a1)))) {
			return {
				code: getOuterHTML(dom),
				map: null,
			}
		}
	}
}
export function _preprocess_sass(builder_opts = {}) {
	const style = _style__sass(builder_opts)
	const markup = _markup__sass()
	return {
		style,
		markup,
	}
}
export const _preprocess__sass = _preprocess_sass
