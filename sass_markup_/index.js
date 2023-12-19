/// <reference types="../types/index.d.ts" />
/// <reference types="./index.d.ts" />
import { selectAll } from 'css-select'
import { a_present_, compact, flatten } from 'ctx-core/array'
import serialize from 'dom-serializer'
import { Tag } from 'domelementtype'
import { parseDocument } from 'htmlparser2'
import { render_sass } from '../render_sass/index.js'
/**
 * @param builder_opts{builder_opts_T}
 * @returns {sass_markup_T}
 */
export function sass_markup_(builder_opts = {}) {
	return sass_markup
	/**
	 * @param opts{opts_T}
	 * @returns {Promise<sass_markup_return_T|undefined>}
	 */
	async function sass_markup(opts) {
		const { filename, content, attributes } = opts
		const dom = parseDocument(content, {
			lowerCaseTags: false,
			lowerCaseAttributeNames: false
		})
		const promise_a = dom.children.map(async (in_node)=>{
			const node = in_node
			if (node.type.toString() === Tag.toString() && node.name == 'svelte:head') {
				const style_node_a = selectAll(`style[type='text/sass'], style[type='text/scss']`, node)
				const promise_a = style_node_a.map(async (_style_node)=>{
					const style_node = _style_node
					const content = serialize(style_node.childNodes)
					const { code } = await render_sass(builder_opts, {
						filename,
						content,
						attributes
					})
					style_node.attribs.type = 'text/css'
					delete style_node.attribs.global
					style_node.childNodes = parseDocument(`<style>${code}</style>`).children
					// text_node.data = code
					return style_node
				})
				return Promise.all(promise_a)
			}
			return node
		})
		const node_a = await Promise.all(promise_a)
		if (a_present_(flatten(compact(node_a)))) {
			return {
				code: serialize(dom),
				map: null
			}
		}
		return
	}
}
export {
	sass_markup_ as _sass_markup,
	sass_markup_ as _markup__sass,
}
